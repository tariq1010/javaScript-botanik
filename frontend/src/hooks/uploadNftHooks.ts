import openNotification from "components/common/toatMessage/toastMessage";
import { useEffect, useState } from "react";
import env from "enviornment";
import axios from "axios";

export const UploadNftHook = () => {
  const [data, setData] = useState(null);

  const uploadHandle = async (file) => {
    console.log("uplad", file);
    let obj = {
      data: JSON.parse(file),
    };
    let result;
    result = await axios.post(`${env.BACKEND_BASE_URL}/upload-nft`, obj);
    setData(result);
  };

  return {
    data,
    uploadHandle,
  };
};
