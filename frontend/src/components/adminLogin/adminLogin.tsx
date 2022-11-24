import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "hooks/useForm";
import dotenv from "dotenv";
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

const AdminLogin = () => {
  //decalartions
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //useAppSelector
  const { credentials, loading, errorMessage, error } = useAppSelector(
    (state) => state.login
  );

  //custom hooks
  const { login } = LoginHook();
  const { loading: authLoading, auth } = CheckAuthHook();
  const { handleSubmit, errors } = useForm(
    login,
    credentialsValidate,
    credentials
  );

  //useEffect
  useEffect(() => {
    auth && dispatch(resetcheckAuth()) && navigate("/contract-functions");
  }, [auth]);


  return (
    <Content>
      <>
        <SimpleBackdrop loading={authLoading} />
        <LoginMain>
          <LoginContainer>
            <Heading>LOGIN</Heading>
            <EmailInputField
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
            />
            {error && errorMessage.status === 404 && (
              <p style={{ color: "white" }}>{errorMessage.error}</p>
            )}
            {errors.username && (
              <p style={{ color: "white" }}>{errors.username}</p>
            )}
            <PasswordInputField
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
            />
            {error && errorMessage.status === 401 && (
              <p style={{ color: "white" }}>{errorMessage.error}</p>
            )}
            {errors.password && (
              <p style={{ color: "white" }}>{errors.password}</p>
            )}

            <LoginButton disabled={loading} onClick={handleSubmit}>
              {loading ? "Signing in..." : "Login"}
            </LoginButton>
          </LoginContainer>
        </LoginMain>
      </>
    </Content>
  );
};

export default AdminLogin;
