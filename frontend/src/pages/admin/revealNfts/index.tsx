import React, { useMemo, useState, useEffect } from "react";
import { mintNftRequest } from "store/redux/slices/mintNftSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import ConnectWallet from "components/connect wallet/connectWallet";
import { app } from "utility/constants";
import Toast from "components/toast Message/toastMessage";
import { revealCheck } from "utility/conditionals";
import { MainWrapper } from "../../home/components/homeElement";
import { useNavigate } from "react-router-dom";
import MainNavbar from "components/navbar";
import { PhaseCountHook } from "hooks/web3Hooks";
import { CheckAuthHook } from "hooks/adminhooks";
import { resetcheckAuth } from "store/redux/slices/adminSlices/checkAuthSlice";
import SimpleBackdrop from "components/backdrop/backdrop";
import { MintedNftHook } from "hooks/nftHooks";
import NFTService from "services/nftServices";

type Props = {
  isRevealMain?: boolean;
};

const Reveal: React.FC<Props> = () => {
  //declaration
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  //useState
  const [open, setOpen] = useState(false);

  //useAppSelector
  const { web3, accounts } = useAppSelector((state) => state.web3Connect);
  const { mintLoading, success, count, error, errorMessage } = useAppSelector(
    (state) => state.mintNft
  );

  //custom hooks
  const { error: authError, loading } = CheckAuthHook();

  //components functions
  const revealNft = () => {
   count?.phaseLimit === count?.phaseMintedCount &&
      dispatch(mintNftRequest({ count: count?.totalSupply, token }));
  };

  //useEffect
  useEffect(() => {
    (authError || !token) && dispatch(resetcheckAuth()) && navigate("/admin-login");
  }, [authError, token]);

  useEffect(() => {
    if(success) {
      new NFTService().getUpdatedCount()
      setOpen(true)
    }
  }, [success]);


  return (
    <div>
      <MainNavbar />
      <SimpleBackdrop loading={loading} />
      {success ? (
        <Toast
          type="success"
          open={open}
          setOpen={setOpen}
          message="Nfts Revealed!"
        />
      ) : (
        ""
      )}
      <MainWrapper isRevealMain>
        <h3 style={{ color: "white", textAlign: "center" }}>
          Nfts to reveal: {count?.totalSupply === count?.offChainCount? 0:count?.phaseMintedCount}
        </h3>
        <br />
        {web3 ? (
          <button
            onClick={() => revealNft()}
            disabled={
              mintLoading || count?.phaseLimit != count?.phaseMintedCount || count?.totalSupply === count?.offChainCount ? true : false
            }
            style={{
              border: "none",
              background: "#DE4230",
              color: "white",
              padding: "0.3rem 3rem",
              fontSize: "1.5rem",
              borderRadius: "10px",
            }}
          >
            Reveal
          </button>
        ) : (
          <ConnectWallet />
        )}
      </MainWrapper>
    </div>
  );
};

export default Reveal;
