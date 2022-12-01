import openNotification from "components/common/toatMessage/toastMessage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMintedNftsRequest } from "store/redux/slices/getNftSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import axios from "axios";
import env from "enviornment";

export const MintedNftHook = () => {
  const [data, setData] = useState(null);

  const getMinted = async () => {
    let result = await axios.get(`${env.BACKEND_BASE_URL}/nfts_minted`);
    setData(result);
  };

  useEffect(() => {
    getMinted();
  }, []);

  return {
    data,
    getMinted,
  };
};
