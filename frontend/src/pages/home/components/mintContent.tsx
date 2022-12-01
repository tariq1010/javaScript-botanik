import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/store";
import ConnectWallet from "components/connect wallet/connectWallet";
import Toast from "components/toast Message/toastMessage";
import useForm from "../../../hooks/useForm";
import validate from "./validateNumber";
import { userBalanceAsync } from "../../../store/redux/slices/web3ConnectSlice";
import InputNumbers from "./inputNumbers";
import mintBtn from "assets/images/mintNft.png";
import { ConnectBtnImg, openNotification } from "components/common";
import { LogoDesc } from "./homeElement";

import SimpleBackdrop from "components/backdrop/backdrop";
import { GetProofHook } from "../../../hooks/whiteListAddressHooks";
import { GetMintStatusHook, PhaseCountHook } from "hooks/web3Hooks";
import { BotanikService } from "web3Functions/botanik";
import ToastMessage from "components/toast Message/toastMessage";
import { btkData } from "store/redux/slices/helperSlices/modelSlice";


type Props = {
  num: number;
  setNum: any;
};

const MintContent: React.FC<Props> = ({
  num,
  setNum,
}: {
  num: number;
  setNum: any;
}) => {
  //declarations
  const dispatch = useAppDispatch();

  //useState
  const [mintLoading, setMintLoading] = useState(false);
  const [botanikConfig, setBotanikConfig] = useState(null);
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //useAppSelector
  const { web3, userBalance, contract, accounts } = useAppSelector(
    (state) => state.web3Connect
  );
  const { botanikData} = useAppSelector(
    (state) => state.model
  );
console.log("BTK NFT mint", botanikData)

useEffect(()=>{
  if(web3)
  {
    dispatch(btkData());
  }
 },[web3])
  const { fee, feeLoading } = useAppSelector((state) => state.getFee);
  const { count } = useAppSelector((state) => state.mintNft);


  useEffect(() => {
      setIsLoading(true);
      validateFunc();
      setIsLoading(false);
  }, [botanikData]);
  

const validateFunc = async() => {
 if(botanikData?.isPaused || botanikData?.totalSupply >= botanikData?.phaseLimit){
  setStatus(true);
  console.log("Status", status);
 }
 else {
  setStatus(false);
  console.log("Status", status);
 }
}
  const mint = async () => {
    try {
      if(status) {
        alert("error")
      }
      else {
      setMintLoading(true);
      const txn = await BotanikService.mint(web3, accounts, num)
      if(txn && txn.status) {
        ToastMessage("Success","Transaction Successfull","success")
      }
      if(txn && txn.code) {
        ToastMessage(" ", "Transaction Rejected by User", "error");
      }
      dispatch(btkData());
      console.log(txn);
      validateFunc();
      setMintLoading(false);
      }
    } catch (error) {
      console.log(error);
      setMintLoading(false);
    
    }
  };

  //custom Hooks
  const { data } = GetProofHook();
  const { whitelistStatus, mintPauseStatus } = GetMintStatusHook();
  const { handleSubmit, errors, setErrors, setIsSubmitting } = useForm(
    mint,
    validate,
    {
      num: num,
      nftleft: botanikData?.totalSupply -  botanikData?.phaseLimit,
      balance: userBalance,
    }
  );

  //useEffects
  useEffect(() => {
    web3 && dispatch(userBalanceAsync());
  }, [web3]);

  return (
    <>
      
      <SimpleBackdrop loading={mintLoading || feeLoading} />
      <p style={{ color: "white" }}>Total Price: {(((num * botanikData?.mintFee)/10 **18).toFixed(15) || 0)}</p>
      <InputNumbers
        setIsSubmitting={setIsSubmitting}
        validate={validate}
        setErrors={setErrors}
        error={errors.num}
        num={num}
        setNum={setNum}
        remaingNftLength={botanikData?.phaseLimit - botanikData?.totalSupply}
        setStatus={setStatus}
        botanikConfig={botanikData}
        status ={status}
      />
      <br />
      {botanikData && botanikData?.phaseLimit > 0 ? (
        <p style={{ color: "white" }}>
          Remaining in phase : {botanikData?.totalSupply}/{botanikData?.phaseLimit}
        </p>
      ) : (
        ""
      )}

      <LogoDesc battleDesc>Join the battle for {} ETH</LogoDesc>

      {web3 ? (
        <ConnectBtnImg  
          className={!mintPauseStatus ? "mintedBtn" : ""}
          src={mintBtn }
          onClick={(event) => {
            if (botanikData?.totalSupply === botanikData?.phaseLimit) {
              openNotification(
                "Phase Completed",
                "Current phase of minting in finished",
                "warning"
              );
            } else if ( botanikData?.isPaused) {
              openNotification("Paused", "Minting paused", "warning");
            } else {
              handleSubmit(event);
            }
          }}
        />
      ) : (
        <ConnectWallet />
      )}
    </>
  );
};

export default MintContent;
