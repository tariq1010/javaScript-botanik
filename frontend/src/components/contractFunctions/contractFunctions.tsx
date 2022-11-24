import React, { useState, useEffect, useMemo } from "react";
import { Button, Wrapper, MainDiv } from "./contractFunctionsElements";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { loadBlockchain } from "../../store/redux/slices/web3ConnectSlice";
import { useNavigate } from "react-router-dom";
import connectBtn from "assets/images/connectBtn.png";
import { MainModel, ConnectBtnImg, openNotification } from "components/common";
// redux Slice
import { mainModel } from "store/redux/slices/helperSlices/modelSlice";
import {
  mintStatusWeb3,
  whitelistMintStatus,
} from "store/redux/slices/contractFunctions/read";
import SimpleBackdrop from "components/backdrop/backdrop";
import {
  pauseWeb3,
  renounceOwnership,
  toggleWhitelistStatus,
  unpauseWeb3,
} from "store/redux/slices/contractFunctions/write";

import MainNavbar from "components/navbar";
import { GetMintStatusHook, PhaseCountHook } from "hooks/web3Hooks";
import { getFeeRequest } from "store/redux/slices/getFeeSlice";
import { CheckAuthHook } from "hooks/adminhooks";
import { resetcheckAuth } from "store/redux/slices/adminSlices/checkAuthSlice";
import { MintedNftHook } from "hooks/nftHooks";

toast.configure();

type Props = {
  contractConnectBtn?: boolean;
};
const ContractFunctions: React.FC<Props> = () => {
  //declarations
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("access_token");

  //useAppSelector
  const { web3, contract, accounts } = useAppSelector(
    (state) => state.web3Connect
  );
  const { fee } = useAppSelector((state) => state.getFee);
  const { count } = useAppSelector((state) => state.mintNft);

  //useState
  const [loading, setLoading] = useState(false);
  const [connectModel, setConnectModel] = useState(false);
  const [transferModel, setTransferModel] = useState(false);
  const [withDrawModel, setWithDrawModel] = useState(false);
  const [phaseModel, setPhaseModel] = useState(false);

  //custom hooks
  const { whitelistStatus, mintPauseStatus, getMintStatus, statusLoading } =
    GetMintStatusHook();
  const { loading: authLoading, error, auth } = CheckAuthHook();

  //component functions
  const transferOwnerShipModel = () => {
    setTransferModel(true);
    setWithDrawModel(false);
    setPhaseModel(false);
    dispatch(mainModel(true));
  };
  const setPhaseModal = () => {
    try {
      if (count?.phaseMintedCount != count?.phaseLimit) {
        throw "Current phase is stil incomplete!";
      } else if (count.totalSupply != count.offChainCount)
        throw "Please first reveal previous phase NFTs";
      setTransferModel(false);
      setWithDrawModel(false);
      setPhaseModel(true);
      dispatch(mainModel(true));
    } catch (error) {
      openNotification("Cannot update Phase", error, "error");
    }
  };
  const withDrawShipModel = () => {
    setTransferModel(false);
    setWithDrawModel(true);
    setPhaseModel(false);
    dispatch(mainModel(true));
  };

  const connectModelFn = () => {
    setConnectModel(true);
    dispatch(mainModel(true));
  };

  const handleRenounceOwnership = async () => {
    try {
      setLoading(true);
      const receipt = await renounceOwnership(contract, accounts[0]);
      console.log(receipt);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const pauseWeb3Fn = async () => {
    try {
      setLoading(true);
      const receipt = await pauseWeb3(contract, accounts[0]);
      setLoading(false);

      await getMintStatus();
      console.log(receipt);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  const unpauseWeb3Fn = async () => {
    try {
      const receipt = await unpauseWeb3(contract, accounts[0]);
      setLoading(true);

      await getMintStatus();
      setLoading(false);

      console.log(receipt);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  const toogleWhiteList = async () => {
    try {
      setLoading(true);
      const receipt = await toggleWhitelistStatus(contract, accounts[0]);
      setLoading(false);
      await getMintStatus();
      console.log(receipt);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  //useEffects
  useEffect(() => {
    dispatch(mainModel(true));
    dispatch(getFeeRequest());
  }, []);

  useEffect(() => {
    (error || !token) && dispatch(resetcheckAuth()) && navigate("/admin-login");
  }, [error, token]);

  return (
    <>
      <MainNavbar />
      <SimpleBackdrop loading={loading || authLoading} />
      <Wrapper>
        <MainModel
          connectModel={connectModel}
          transferModel={transferModel}
          withDrawModel={withDrawModel}
          setPhaseModal={phaseModel}
        />

        {web3 ? (
          <MainDiv>
            {web3 ? (
              <div style={{ color: "white" }}>
                <p>Current Mint Fee: {fee}</p>
                {count?.phaseLimit > 0 ? (
                  <p>Current Mint Limit: {count?.phaseLimit}</p>
                ) : (
                  "Current Phase Finished"
                )}
              </div>
            ) : (
              ""
            )}

            <Button onClick={transferOwnerShipModel}>Transfer Ownership</Button>
            <Button onClick={setPhaseModal}>Update Phase</Button>
            <Button onClick={handleRenounceOwnership}>
              Renounce Ownership
            </Button>
            <Button onClick={withDrawShipModel}>Withdraw</Button>
            {mintPauseStatus ? (
              <Button aria-disabled={statusLoading} onClick={unpauseWeb3Fn}>
                {statusLoading ? "Loading..." : "Continue Minting"}
              </Button>
            ) : (
              <Button aria-disabled={statusLoading} onClick={pauseWeb3Fn}>
                {statusLoading ? "Loading..." : "  Pause Minting"}
              </Button>
            )}
            <Button onClick={toogleWhiteList}>
              {statusLoading
                ? "Loading..."
                : whitelistStatus
                ? "Pause Whitlist Minting"
                : "Continue Whitelist Minting"}
            </Button>
          </MainDiv>
        ) : (
          <div>
            <ConnectBtnImg
              contractConnectBtn
              src={connectBtn}
              onClick={connectModelFn}
            />
          </div>
        )}
      </Wrapper>
    </>
  );
};

export default ContractFunctions;
