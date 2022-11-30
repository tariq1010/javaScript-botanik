import openNotification from "components/common/toatMessage/toastMessage";
import { useEffect } from "react";

import axios from "axios";

export const UploadNftHook = () => {
  let result;

  const uploadHandle = async (file) => {
    console.log("uplad", file);
    let obj = {
      data: JSON.parse(file),
    };

    result = await axios.post("http://localhost:8080/upload-nft", obj);
    console.log("result", result);
  };

  return {
    result,
    uploadHandle,
  };
};
