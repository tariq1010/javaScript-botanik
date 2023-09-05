import openNotification from "components/common/toatMessage/toastMessage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMintedNftsRequest } from "store/redux/slices/getNftSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import axios from "axios";
import env from "enviornment";
import { CommonHook } from "./commonHook";
import NFTService from "services/nftServices";

export const MintedNftHook = () => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);

  const getMinted = async () => {
    setLoader(true);
    let result = await axios.get(`${env.BACKEND_BASE_URL}/nfts_minted`);
    setData(result);
    setLoader(false);
  };

  useEffect(() => {
    getMinted();
  }, []);

  return {
    data,
    getMinted,
    loader,
  };
};

export const GetNftsImagesHook = (page) => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();

  const getNftsImages = async (page) => {
    try {
      setLoading(true);
      const result = await new NFTService().getNftsImages(page);
      if (result.response == "success" && result.data) {
        setData(result.data);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getNftsImages(page);
  }, [page]);

  return {
    getNftsImages,
    data,
    loading,
    error,
    setLoading,
  };
};
