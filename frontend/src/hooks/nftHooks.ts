import openNotification from "components/common/toatMessage/toastMessage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMintedNftsRequest } from "store/redux/slices/getNftSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import axios from "axios";
import env from "enviornment";

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
