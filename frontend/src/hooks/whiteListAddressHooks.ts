import openNotification from "components/common/toatMessage/toastMessage"
import { useEffect, useState } from "react"
import { getProofRequest, resetWhiteList, saveAddressesRequest } from "store/redux/slices/addressesSlice"
import { useAppDispatch, useAppSelector } from "store/store"
import { setMerkleRootAsync } from 'store/redux/slices/web3ConnectSlice'
import WhitelistAddressService from "services/whitelistAddressesService"
import { useNavigate } from "react-router-dom"



export const AddWhiteListAddressesHook = () => {
    const { whiteList, saveAddresses } = useAppSelector((state: any) => state.addresses)
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem('access_token')
    const navigate = useNavigate();

    const addAddresses = async () => {
        setLoading(true)
        try {
            if (!token) {
                openNotification('Authentication Failed', 'Please login agian', 'warning')
                navigate('/admin-login')
            }
            else {
                const data = {
                    token,
                    addresses: whiteList
                }
                const merkleRoot = await new WhitelistAddressService().generateMerkleRoot(data)

                if (!merkleRoot?.data?.error) {

                    const { data } = merkleRoot.data

                        const receipt = await dispatch(setMerkleRootAsync(data.root_hash))

                        if (receipt?.payload?.status) {
                            setLoading(false)
                            dispatch(saveAddressesRequest({ addresses: data.addresses, root_hash: data.root_hash, token }))
                        }
                        else {
                            setLoading(false)
                            openNotification('Error', "Transaction Failed", "error")
                        }
                    
                   
                }
                else {
                    if (merkleRoot.data.status === 401) {
                        openNotification('Authentication Failed', 'Please login agian', 'warning')
                        navigate('/admin-login')
                    }
                    setLoading(false)
                    console.log(merkleRoot.data.error, "error creating merkle root")
                    merkleRoot.data.status === 505 && openNotification('Error', "Error creating root", "error")
                }

            }
        }
        catch (error) {
            console.log(error, "catch error")
            setLoading(false)
            openNotification('Error', "Transaction Failed", "error")
        }


    }

    useEffect(() => {
        saveAddresses.result && dispatch(resetWhiteList()) && openNotification('Added', 'Addresses added to whiltelist', 'success')
        if (saveAddresses.error) {
            saveAddresses.status == 401 && navigate('/admin-login')
            saveAddresses.status == 505 && openNotification('Error', 'Somthing went wrong', 'error')
        }

    }, [saveAddresses.result, saveAddresses.error])

    return {
        addAddresses,
        loading
    }
}


export const GetProofHook = () => {
    const { getProof } = useAppSelector((state: any) => state.addresses)
    const { web3, accounts } = useAppSelector((state) => state.web3Connect);
    const dispatch = useAppDispatch()

    useEffect(() => {
       // console.log(web3, accounts, "data1")
        web3 && accounts && dispatch(getProofRequest({ address: accounts[0] }))
    }, [web3, accounts])


    return {
        data: getProof.result,
        error: getProof.error,
        errorMessage: getProof.errorMessage
    }
}