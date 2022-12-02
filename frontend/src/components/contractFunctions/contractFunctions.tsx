import React, { useState, useEffect, useMemo } from "react";
import { Button, Wrapper, MainDiv } from "./contractFunctionsElements";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";
import connectBtn from "assets/images/connectBtn.png";
import { MainModel, ConnectBtnImg, openNotification } from "components/common";
// redux Slice
import { btkData, mainModel } from "store/redux/slices/helperSlices/modelSlice";

import SimpleBackdrop from "components/backdrop/backdrop";
import { toggleWhitelistStatus } from "store/redux/slices/contractFunctions/write";

import MainNavbar from "components/navbar";
import { GetMintStatusHook, PhaseCountHook } from "hooks/web3Hooks";
import { getFeeRequest } from "store/redux/slices/getFeeSlice";
import { CheckAuthHook } from "hooks/adminhooks";
import { BotanikService } from "web3Functions/botanik";

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
  const [config, setBotanikConfig] = useState(null);

  //custom hooks
  const { whitelistStatus, mintPauseStatus, getMintStatus, statusLoading } =
    GetMintStatusHook();
  const { loading: authLoading, error, auth } = CheckAuthHook();
  const { botanikData } = useAppSelector((state) => state.model);
  console.log("BTK NFT admin", botanikData);
  //component functions
  const transferOwnerShipModel = () => {
    setTransferModel(true);
    setWithDrawModel(false);
    setPhaseModel(false);
    dispatch(mainModel(true));
  };
  const setPhaseModal = () => {
    try {
      if (botanikData?.totalSupply != botanikData?.phaseLimit) {
        throw "Current phase is still incomplete!";
      }
      //else if (count.totalSupply != count.offChainCount)
      //   throw "Please first reveal previous phase NFTs";
      setTransferModel(false);
      setWithDrawModel(false);
      setPhaseModel(true);
      dispatch(mainModel(true));
    } catch (error) {
      openNotification("Cannot update Phase", error, "error");
    }
  };
  // const withDrawShipModel = () => {
  //   setTransferModel(false);
  //   setWithDrawModel(true);
  //   setPhaseModel(false);
  //   dispatch(mainModel(true));
  // };

  const connectModelFn = () => {
    setConnectModel(true);
    dispatch(mainModel(true));
  };

  const withdrawHandle = async () => {
    try {
      setLoading(true);
      const receipt = await BotanikService.withdraw(
        web3,
        botanikData?.owner,
        accounts
      );
      if (receipt.status) {
        dispatch(btkData());
        setLoading(false);
        openNotification("Successfull", "Transaction successful", "success");
      } else {
        setLoading(false);
        openNotification("Error", "User denied transaction", "error");
      }
      console.log(receipt);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleRenounceOwnership = async () => {
    try {
      setLoading(true);
      const receipt = await BotanikService.renounceOwnership(web3, accounts);
      if (receipt.status) {
        dispatch(btkData());
        setLoading(false);
        openNotification("Successfull", "Transaction successful", "success");
      } else {
        setLoading(false);
        openNotification("Error", "User denied transaction", "error");
      }
      console.log(receipt);
    } catch (error) {
      console.log("error", error);
    }
  };

  const pauseWeb3Fn = async () => {
    try {
      setLoading(true);
      const receipt = await BotanikService.pause(web3, accounts);
      if (receipt.status) {
        dispatch(btkData());
        setLoading(false);
        openNotification("Successfull", "Minting Paused", "success");
      } else {
        setLoading(false);
        openNotification("Error", "User denied transaction", "error");
      }

      console.log(receipt);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  const unpauseWeb3Fn = async () => {
    try {
      setLoading(true);
      const receipt = await BotanikService.unpause(web3, accounts);
      if (receipt.status) {
        dispatch(btkData());
        setLoading(false);
        openNotification("Successfull", "Minting UnPaused", "success");
      } else {
        setLoading(false);
        openNotification("Error", "User denied transaction", "error");
      }
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
    //auth && dispatch(resetcheckAuth()) && navigate("/contract-functions");
    if (accounts && botanikData?.owner) {
      (botanikData?.owner).toLowerCase() === accounts.toLowerCase() &&
        navigate("/contract-functions");
    } else {
      navigate("/admin-login");
    }
  }, [accounts, botanikData]);

  return (
    <>
      <MainNavbar />
      <SimpleBackdrop loading={loading} />
      <Wrapper>
        <div className="overlaybg">
          <MainModel
            connectModel={connectModel}
            transferModel={transferModel}
            withDrawModel={withDrawModel}
            setPhaseModal={phaseModel}
          />

          {web3 ? (
            <MainDiv>
              {web3 ? (
                <div style={{ color: "white", fontSize:"16px", fontWeight:"bold", paddingLeft:"20px" }}>
                  <p>Current Mint Fee: {botanikData?.mintFee / 10 ** 18}</p>
                  {botanikData?.phaseLimit > 0 ? (
                    <p>Current Mint Limit: {botanikData?.phaseLimit}</p>
                  ) : (
                    "Current Phase Finished"
                  )}
                </div>
              ) : (
                ""
              )}

              <Button onClick={transferOwnerShipModel}>
                Transfer Ownership
              </Button>
              <Button onClick={setPhaseModal}>Update Phase</Button>
              <Button onClick={handleRenounceOwnership}>
                Renounce Ownership
              </Button>
              <Button onClick={withdrawHandle}>Withdraw</Button>
              {botanikData?.isPaused ? (
                <Button aria-disabled={statusLoading} onClick={unpauseWeb3Fn}>
                  {statusLoading ? "Loading..." : "Continue Minting"}
                </Button>
              ) : (
                <Button aria-disabled={statusLoading} onClick={pauseWeb3Fn}>
                  {statusLoading ? "Loading..." : "  Pause Minting"}
                </Button>
              )}
              {/* <Button onClick={toogleWhiteList}>
              {statusLoading
                ? "Loading..."
                : whitelistStatus
                ? "Pause Whitlist Minting"
                : "Continue Whitelist Minting"}
            </Button> */}
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
        </div>
      </Wrapper>
    </>
  );
};

export default ContractFunctions;
