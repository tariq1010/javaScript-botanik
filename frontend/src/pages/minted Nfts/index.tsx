import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Backdrop from "../../components/backdrop/backdrop";
import Datatable from "../../components/datatable/datatable";
import ErrorPage from "../../components/error page/errorPage";
import { getMintedNftsRequest } from "../../store/redux/slices/getNftSlice";
import { useNavigate } from "react-router-dom";

import MainNavbar from "components/navbar";


const MintedNfts = () => {
  const dispatch = useAppDispatch();
  const { mintedNfts, mintedLoading, mintedError, mintedErrorMessage } =
    useAppSelector((state) => state.getNfts);
  const token = localStorage.getItem("access_token");

  const navigate = useNavigate();

  useEffect(() => {
    // dispatch(getMintedNftsRequest({ token: token }));
  }, []);

   

  return (
    <>
      <MainNavbar/>
 
 
      {mintedError ? (
        <ErrorPage
          errorMessage={
            mintedErrorMessage === "401"
              ? "Wallet is not connected"
              : mintedErrorMessage
          }
        />
      ) : (
        <div>
          <Backdrop loading={mintedLoading} />
          <Datatable data={mintedNfts} minted={true} />
        </div>
      )}
    </>
  );
};

export default MintedNfts;
