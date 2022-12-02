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
import { OwnerHook } from "hooks/adminhooks";
const AdminLogin = () => {
  const { checkOwner, loader } = OwnerHook();
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

  const { botanikData, botanikLoader } = useAppSelector((state) => state.model);
  const [connectModel, setConnectModel] = useState(false);

  //custom hooks

  useEffect(() => {
    if (web3 && accounts) {
      checkOwner();
    }
  }, [web3, accounts]);

  useEffect(() => {
    setConnectModel(true);
    dispatch(mainModel(true));
  }, []);

  return (
    <Content>
      <SimpleBackdrop loading={botanikLoader} />
      <MainModel connectModel={connectModel} />
      <p className="text-white">Only Admin Can Access.</p>
    </Content>
  );
};

export default AdminLogin;
