import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "store/store";
import UploadFile from "components/upload File/uploadFile";
import { setAddresses } from "store/redux/slices/addressesSlice";
import { InputLabel } from "@mui/material";

import { UploadCSVContainer } from "./adminElement";

const UploadCsv = () => {
  const dispatch = useAppDispatch();
  const { whiteList } = useAppSelector((state) => state.addresses);

  const saveAddress = (address) => {
    dispatch(setAddresses(address));
  };

  return (
    <UploadCSVContainer>
      <InputLabel className="label" style={{ color: "white" }}>
        <b>upload .csv File</b>
      </InputLabel>
      <UploadFile saveAddress={saveAddress} />
    </UploadCSVContainer>
  );
};

export default UploadCsv;
