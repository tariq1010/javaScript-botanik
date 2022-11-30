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

  const { botanikData} = useAppSelector(
    (state) => state.model
  );
console.log("BTK NFT admin", botanikData)

  //custom hooks
 
  const { loading: authLoading, auth } = CheckAuthHook();


  useEffect(() => {
    //auth && dispatch(resetcheckAuth()) && navigate("/contract-functions");
    if ((accounts[0] || []).length !== 0 && botanikData?.owner) {
      (botanikData?.owner).toLowerCase() === (accounts[0]).toLowerCase() && navigate("/contract-functions")
    } 
  }, [accounts,botanikData]);
 


  return (
    <Content>
      <>
        <SimpleBackdrop loading={authLoading} />
        <LoginMain>
          <LoginContainer>
            <Heading>LOGIN</Heading>
            {/* <EmailInputField
              value={credentials.username}
              placeholder="User Name"
              type={"text"}
              onChange={(e) =>
                dispatch(
                  setCredentials({
                    ...credentials,
                    username: e.target.value,
                  })
                )
              }
            /> */}
            {/* {error && errorMessage.status === 404 && (
              <p style={{ color: "white" }}>{errorMessage.error}</p>
            )}
            {errors.username && (
              <p style={{ color: "white" }}>{errors.username}</p>
            )} */}
            {/* <PasswordInputField
              value={credentials.password}
              placeholder="Password"
              type={"password"}
              onChange={(e) =>
                dispatch(
                  setCredentials({
                    ...credentials,
                    password: e.target.value,
                  })
                )
              }
            /> */}
            {/* {error && errorMessage.status === 401 && (
              <p style={{ color: "white" }}>{errorMessage.error}</p>
            )}
            {errors.password && (
              <p style={{ color: "white" }}>{errors.password}</p>
            )} */}

            {/* <LoginButton disabled={loading} onClick={handleSubmit}>
              {loading ? "Signing in..." : "Login"}
            </LoginButton> */}
            <ConnectWallet />
            {/* <Button onClick={()=>login()}>Login</Button> */}
          </LoginContainer>
        </LoginMain>
      </>
    </Content>
  );
};

export default AdminLogin;
