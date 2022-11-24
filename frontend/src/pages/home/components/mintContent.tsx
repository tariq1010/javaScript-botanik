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
import {
  mintNftAsync,
  nftCountAsync,
} from "store/redux/slices/web3ConnectSlice";
import SimpleBackdrop from "components/backdrop/backdrop";
import { GetProofHook } from "../../../hooks/whiteListAddressHooks";
import { GetMintStatusHook, PhaseCountHook } from "hooks/web3Hooks";

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
  const [showToast, setShowToast] = useState(false);
  const [showToastType, setShowToastType] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [mintLoading, setMintLoading] = useState(false);

  //useAppSelector
  const { web3, userBalance, contract, accounts } = useAppSelector(
    (state) => state.web3Connect
  );
  const { fee, feeLoading } = useAppSelector((state) => state.getFee);
  const { count } = useAppSelector((state) => state.mintNft);

  //components Functions
  const mintfn = async (values) => {
    try {
      let receipt = await mintNftAsync(contract, accounts, web3, values);
      if (receipt?.message) throw "Transaction Rejected";
      setShowToast(true);
      setToastMessage("NFT minted Request confirmed");
      setShowToastType("success");

      setMintLoading(false);
    } catch (error) {
      setShowToast(true);
      setToastMessage("Transaction rejected");
      setShowToastType("error");
      setMintLoading(false);
    }
  };

  const mint = async () => {
    try {
      setMintLoading(true);
      if (mintPauseStatus || count.remainingInPhase === 0) {
        throw "NFT minting is stoped";
      }
      const values = {
        nftCount: num,
        nftFees: fee * num,
        proof: data?.address ? data?.address?.proof : [],
      };

      if (whitelistStatus) {
        if (data?.verified) {
          await mintfn(values);
        } else throw "User not whitelisted for whitelist minting";
      } else {
        await mintfn(values);
      }
    } catch (error) {
      console.log("mint error", error);
      setShowToast(true);
      setToastMessage(error);
      setShowToastType("error");
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
      nftleft: count?.remainingInPhase,
      balance: userBalance,
    }
  );

  //useEffects
  useEffect(() => {
    web3 && dispatch(userBalanceAsync());
  }, [web3]);

  return (
    <>
      <Toast
        message={toastMessage}
        type={showToastType}
        open={showToast}
        setOpen={setShowToast}
      />
      <SimpleBackdrop loading={mintLoading || feeLoading} />
      <p style={{ color: "white" }}>Total Price: {(num * fee).toFixed(4)}</p>
      <InputNumbers
        setIsSubmitting={setIsSubmitting}
        validate={validate}
        setErrors={setErrors}
        error={errors.num}
        num={num}
        setNum={setNum}
        remaingNftLength={count?.remainingInPhase}
      />
      <br />
      {count && count.phaseLimit > 0 ? (
        <p style={{ color: "white" }}>
          Remaining in phase : {count.remainingInPhase}/{count.phaseLimit}
        </p>
      ) : (
        ""
      )}

      <LogoDesc battleDesc>Join the battle for {fee} ETH</LogoDesc>

      {web3 ? (
        <ConnectBtnImg
          className={!mintPauseStatus ? "mintedBtn" : ""}
          src={mintBtn}
          onClick={(event) => {
            if (count.remainingInPhase === 0) {
              openNotification(
                "Phase Completed",
                "Current phase of minting in finished",
                "warning"
              );
            } else if (mintPauseStatus) {
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
