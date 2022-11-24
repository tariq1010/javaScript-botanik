import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { getMintedNftsRequest } from "../../../store/redux/slices/getNftSlice"
import { getRandomNftRequest } from "../../../store/redux/slices/getRandomNftSlice";
import { getNftsForUnMintRequest } from "../../../store/redux/slices/getNftForUnMint";
import { unMintNftRequest } from "../../../store/redux/slices/unMintNftSlice";



const Cornjob = () => {

  const dispatch = useAppDispatch()
  const supplyChainCount = 32
  const token = localStorage.getItem('access_token')
  const { mintedNfts } = useAppSelector((state) => state.getNfts);
  const { nftsForUnMint } = useAppSelector((state) => state.nftForUnMint)
  const num = supplyChainCount - mintedNfts.length


  useEffect(() => {
    const interval = setInterval(() => dispatch(getMintedNftsRequest({ token: token })), 120000);
    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    mintedNfts.length > 0 && supplyChainCount > mintedNfts.length && dispatch(getRandomNftRequest({ token: token, number: num }))
    mintedNfts.length > 0 && supplyChainCount < mintedNfts.length && dispatch(getNftsForUnMintRequest({ token: token, number: num }))

  }, [mintedNfts])

  useEffect(() => {
    nftsForUnMint.length > 0 && nftsForUnMint.map((item: any) => {
      dispatch(unMintNftRequest({ id: item._id, token: token }))
    })
  }, [nftsForUnMint])

}



export default Cornjob;