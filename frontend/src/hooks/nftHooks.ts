import openNotification from "components/common/toatMessage/toastMessage"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getMintedNftsRequest } from "store/redux/slices/getNftSlice"
import { useAppDispatch, useAppSelector } from "store/store"


export const MintedNftHook =()=>{
    const dispatch = useAppDispatch()
    const token = localStorage.getItem('access_token')
    const navigate = useNavigate()
    const { mintedNfts, mintedLoading, mintedError, mintedErrorMessage } =
    useAppSelector((state) => state.getNfts);

    const getMinted =()=>{
        dispatch(getMintedNftsRequest({token}))
    }

    useEffect(()=>{
        if(token){
          getMinted()
        }
    }, [token])

    useEffect(()=>{
        // mintedError && openNotification('')
    },[mintedError])

    return{
        mintedNfts,
        offChainCount: mintedNfts?.length,
        mintedLoading,
        getMinted
    }
    
}