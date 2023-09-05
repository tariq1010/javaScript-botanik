import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/store";
import InputAddresses from "./components/inputAddress";
import UploadAddresses from "./components/uploadAddresses";
import useForm from "../../../hooks/useForm";
import validate from "./components/validator";
import { setMerkleRootAsync } from "../../../store/redux/slices/web3ConnectSlice";
import { removeAddresses } from "../../../store/redux/slices/addressesSlice";
import UploadCsv from "./components/uploadCSV";
import Toast from "../../../components/toast Message/toastMessage";
import { useNavigate } from "react-router-dom";

import "pages/admin/admin.css";

import {
  AddButtonAddress,
  AdminContainer,
  FormContent,
} from "./components/adminElement";
import ConnectWallet from "components/connect wallet/connectWallet";
import SimpleBackdrop from "components/backdrop/backdrop";
import MainNavbar from "components/navbar";
import { AddWhiteListAddressesHook } from "hooks/whiteListAddressHooks";
import { CheckAuthHook } from "hooks/adminhooks";
import { resetcheckAuth } from "store/redux/slices/adminSlices/checkAuthSlice";

const Admin = () => {
  //declarations
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token')
  const dispatch = useAppDispatch()

  //useAppSelector
  const { web3 } = useAppSelector((state) => state.web3Connect);
  const { whiteList } = useAppSelector((state) => state.addresses);

  //customHooks
  const { addAddresses, loading } = AddWhiteListAddressesHook();
  const { error, loading: authLoading } = CheckAuthHook();
  const { handleSubmit, errors, setErrors, setIsSubmitting, isSubmitting } =
    useForm(addAddresses, validate, { whiteList: whiteList });

  //useEffect
  useEffect(() => {
    (error || !token) && dispatch(resetcheckAuth()) && navigate("/admin-login");
  }, [error, token]);

  return (
    <>
      <SimpleBackdrop loading={loading} />
      <MainNavbar />
      <AdminContainer>
        <FormContent>
          <InputAddresses />
          <UploadCsv />

          <UploadAddresses
            validate={validate}
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
            setErrors={setErrors}
          />
          {errors.whiteList && (
            <p
              className="btn-add-addresses"
              style={{ color: "red", fontSize: "0.9rem" }}
            >
              *{errors.whiteList}
            </p>
          )}
          <div className="btn-add-addresses">
            {web3 ? (
              <AddButtonAddress
                disabled={loading ? true : false}
                onClick={handleSubmit}
                type="button"
                className={errors?.whiteList ? "btnAddAddress" : ""}
              >
                Submit addresses
              </AddButtonAddress>
            ) : (
              <ConnectWallet />
            )}
          </div>
        </FormContent>
      </AdminContainer>
    </>
  );
};

export default Admin;
