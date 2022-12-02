import { openNotification } from "components/common";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuthRequest } from "store/redux/slices/adminSlices/checkAuthSlice";
import {
  loginRequest,
  resetLogin,
} from "store/redux/slices/adminSlices/loginSlices";
import {
  logoutRequest,
  resetLogout,
} from "store/redux/slices/adminSlices/logoutSlice";
import { logoutWallet } from "store/redux/slices/web3ConnectSlice";
import { btkData } from "store/redux/slices/helperSlices/modelSlice";

import { useAppDispatch, useAppSelector } from "store/store";

import {
  bootanikDataLoading,
  resetBotanikData,
} from "store/redux/slices/helperSlices/modelSlice";

export const LoginHook = () => {
  const { credentials, result, error, errorMessage } = useAppSelector(
    (state) => state.login
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const login = () => {
    dispatch(loginRequest(credentials));
  };

  useEffect(() => {
    error &&
      errorMessage.status === 505 &&
      openNotification(
        "Error",
        "Something went Wrong, please refresh",
        "error"
      );
    result && dispatch(resetLogin()) && navigate("/contract-functions");
  }, [error, result]);

  return {
    login,
  };
};

export const CheckAuthHook = () => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("access_token");
  const { auth, loading, error, errorMessage } = useAppSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    token && dispatch(checkAuthRequest(token));
  }, [token]);

  return {
    auth,
    loading,
    error,
    errorMessage,
  };
};

export const LogoutHook = () => {
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(logoutWallet());
    dispatch(resetBotanikData());
  };

  return {
    logout,
  };
};

export const OwnerHook = () => {
  const { web3, userBalance, contract, accounts } = useAppSelector(
    (state) => state.web3Connect
  );

  const navigate = useNavigate();

  const { botanikData, botanikLoader } = useAppSelector((state) => state.model);

  const [loader, setLoader] = useState(false);
  const [owner, setOwner] = useState(false);
  const dispatch = useAppDispatch();
  const checkOwner = () => {
    setLoader(true);
    dispatch(btkData());
    dispatch(bootanikDataLoading(true));
    dispatch(btkData());
  };

  useEffect(() => {
    if (botanikData) {
      let owner = botanikData?.owner?.toLowerCase() === accounts?.toLowerCase();
      dispatch(bootanikDataLoading(false));
      owner && navigate("/contract-functions");
      if (!owner) {
        setOwner(true);
      }
    }
  }, [botanikData]);

  useEffect(() => {
    if (owner) {
      setTimeout(() => {
        alert("You are not Owner!");
        window.location.reload();
      }, 2000);
    }
  }, [owner]);

  return {
    checkOwner,
    loader,
  };
};
