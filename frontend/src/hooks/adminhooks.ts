import { openNotification } from "components/common";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuthRequest } from "store/redux/slices/adminSlices/checkAuthSlice";
import {
  loginRequest,
  loginRequestSuccess,
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
import { LoginService } from "services/loginServices";
import { CommonHook } from "./commonHook";
import { BrowserUtility } from "utility/browserUtility";

// export const LoginHooks = () => {
//   const { credentials, result, error, errorMessage } = useAppSelector(
//     (state) => state.login
//   );
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   const login = (accounts) => {
//     const obj={
//       accounts:accounts
//     }
//     dispatch(loginRequest(obj));
//   };

//   useEffect(() => {
//     error &&
//       errorMessage.status === 505 &&
//       openNotification(
//         "Error",
//         "Something went Wrong, please refresh",
//         "error"
//       );
//     result && dispatch(resetLogin()) && navigate("/contract-functions");
//   }, [error, result]);

//   return {
//     login,
//   };
// };

export const LoginHook = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const login = async (data) => {
    try {
      const obj = {
        accounts: data,
      };
      const ab={
        owner:data
      }
      setLoading(true);
      const result = await LoginService.login(obj);
      if (result.response == "success" && result.data) {
        BrowserUtility.save("token", result.data.token);
        setData(result.data);
        dispatch(loginRequestSuccess(result.data.token));
        navigate("/contract-functions");
      }
    } catch (error) {
      setError(error);
      setLoading(false);
      setTimeout(() => {
        window.location.reload();
      }, 2000);

     } finally {
      setLoading(false);
    }
  };

  return {
    login,
    data,
    loading,
    error,
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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const logout = async () => {
    const result = await LoginService.logout();
    console.log(result,"result")
    if (result.data) {
      dispatch(logoutWallet());
      dispatch(resetBotanikData());
      BrowserUtility.remove("token");
      dispatch(resetLogin());
      navigate("/admin-login");
    }
  };


  return {
    logout,
 
  };
};


// export const LogoutHook = () => {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const { setError, loading, setLoading } = CommonHook();
//   const logout = async () => {
//     try{
//      setLoading(true)
//     const result = await LoginService.logout();
//     if (result.data) {
//       dispatch(logoutWallet());
//       dispatch(resetBotanikData());
//       BrowserUtility.remove("token");
//       dispatch(resetLogin());
//       navigate("/admin-login");
//      setLoading(false)
//     }
//   }catch (error) {
//     setError(error);
//     setLoading(false)
//   } finally {
//     setLoading(false);
//   }
// }
//   return {
//     logout,
//     loading
//   };
// }





export const OwnerHook = () => {
  const { web3,  accounts } = useAppSelector(
    (state) => state.web3Connect
  );

  const navigate = useNavigate();

  const { botanikData } = useAppSelector((state) => state.model);

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
    if (owner && web3) {
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
