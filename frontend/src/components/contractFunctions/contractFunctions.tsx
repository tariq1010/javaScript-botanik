import React, { useState, useEffect } from "react";
import { Button, Wrapper, MainDiv } from "./contractFunctionsElements";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { MainModel, openNotification } from "components/common";
// redux Slice
import { btkData, mainModel } from "store/redux/slices/helperSlices/modelSlice";

import SimpleBackdrop from "components/backdrop/backdrop";

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
  // const token = localStorage.getItem("access_token");

  //useAppSelector
  const { web3, accounts } = useAppSelector((state) => state.web3Connect);

  //useState
  const [loading, setLoading] = useState(false);
  const [connectModel, setConnectModel] = useState(false);
  const [transferModel, setTransferModel] = useState(false);
  const [withDrawModel, setWithDrawModel] = useState(false);
  const [feeModel, setFeeModel] = useState(false);
  const [phaseModel, setPhaseModel] = useState(false);
  const [config, setBotanikConfig] = useState(null);
  //custom hooks
  const { statusLoading } = GetMintStatusHook();
  const { loading: authLoading, error, auth } = CheckAuthHook();
  const { botanikData ,botanikLoader} = useAppSelector((state) => state.model);
  //component functions
  const transferOwnerShipModel = () => {
    setTransferModel(true);
    setWithDrawModel(false);
    setPhaseModel(false);
    dispatch(mainModel(true));
  };

  const updateFeeModel = () => {
    setTransferModel(false);
    setWithDrawModel(false);
    setPhaseModel(false);
    setFeeModel(true);
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
    if (accounts) {
      let owner = String(botanikLoader).toLowerCase() === accounts.toLowerCase();
      owner && navigate("/contract-functions");
      !owner && navigate("/admin-login");
    }
    if (!web3) {
      navigate("/admin-login");
    }
  }, [accounts]);

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
            feeModel={feeModel}
          />

          {web3 && (
            <MainDiv>
              <div style={{ color: "white" }}>
                <p>Current Mint Fee: {botanikData?.mintFee / 10 ** 18} ETH</p>

                <p>
                  <span>Total Minted Nfts: {botanikData?.totalSupply}</span>
                </p>
              </div>
              <Button onClick={transferOwnerShipModel}>
                Transfer Ownership
              </Button>
              <Button onClick={handleRenounceOwnership}>
                Renounce Ownership
              </Button>
              <Button onClick={withdrawHandle}>Withdraw</Button>
              <Button onClick={updateFeeModel}>Update Fee</Button>
              {botanikData?.isPaused ? (
                <Button aria-disabled={statusLoading} onClick={unpauseWeb3Fn}>
                  {statusLoading ? "Loading..." : "Continue Minting"}
                </Button>
              ) : (
                <Button aria-disabled={statusLoading} onClick={pauseWeb3Fn}>
                  {statusLoading ? "Loading..." : "  Pause Minting"}
                </Button>
              )}
            </MainDiv>
          )}
        </div>
      </Wrapper>
    </>
  );
};

export default ContractFunctions;
