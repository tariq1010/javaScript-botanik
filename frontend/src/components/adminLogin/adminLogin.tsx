import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "hooks/useForm";
import dotenv from "dotenv";
import ConnectWallet from "components/connect wallet/connectWallet";
import {
  Content,
  EmailInputField,
  Heading,
  LoginButton,
  LoginContainer,
  PasswordInputField,
  LoginMain,
} from "./adminLoginElements";
import { credentialsValidate } from "./validate";
import { useAppDispatch, useAppSelector } from "store/store";
import { setCredentials } from "store/redux/slices/adminSlices/loginSlices";
import { CheckAuthHook, LoginHook } from "hooks/adminhooks";
import { resetcheckAuth } from "store/redux/slices/adminSlices/checkAuthSlice";
import SimpleBackdrop from "components/backdrop/backdrop";
import { BotanikService } from "web3Functions/botanik";
import { Button } from "react-bootstrap";
import { btkData } from "store/redux/slices/helperSlices/modelSlice";
import { mainModel } from "store/redux/slices/helperSlices/modelSlice";
import { MainModel } from "components/common";

const AdminLogin = () => {
  //decalartions
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [config, setBotanikConfig] = useState(null);
  //useAppSelector
  const { credentials, loading, errorMessage, error } = useAppSelector(
    (state) => state.login
  );
  const { web3, userBalance, contract, accounts } = useAppSelector(
    (state) => state.web3Connect
  );

  const { botanikData } = useAppSelector((state) => state.model);
  const [connectModel, setConnectModel] = useState(false);

  //custom hooks

  const { loading: authLoading, auth } = CheckAuthHook();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    //auth && dispatch(resetcheckAuth()) && navigate("/contract-functions");

    if (accounts && botanikData?.owner) {
      setLoader(true);
      let owner = (botanikData?.owner).toLowerCase() === accounts.toLowerCase();
      setLoader(false);
      owner && navigate("/contract-functions");
      if(!owner) {
        alert("You are not Owner!");
        window.location.reload();
      }
      }
  }, [web3, accounts, botanikData]);


  useEffect(() => {
    setConnectModel(true);
    dispatch(mainModel(true));
  }, []);

  return (
    <Content>
      <SimpleBackdrop loading={loader} />
      <MainModel connectModel={connectModel} />
      <p className="text-white">Only Admin Can Access.</p>
    </Content>
  );
};

export default AdminLogin;
