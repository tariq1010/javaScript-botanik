import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ImCross } from "react-icons/im";
import {
  BoxContainer,
  HeaderSection,
  InputField,
  MintModalSection,
  Text,
  Title,
  ConnectButton,
  MintButton,
} from "./elements";
import InputNumbers from "pages/mintingNft/components/inputNumbers";
import { useAppDispatch, useAppSelector } from "store/store";
import openNotification from "components/common/toatMessage/toastMessage";
import {
  ownerAsync,
  userBalanceAsync,
} from "store/redux/slices/web3ConnectSlice";
import { GetProofHook } from "hooks/whiteListAddressHooks";
import { getTokenRequest } from "store/redux/slices/tokenSlice";
import { getFeeRequest } from "store/redux/slices/getFeeSlice";
import { btkData, mainModel } from "store/redux/slices/helperSlices/modelSlice";
import { BotanikService } from "web3Functions/botanik";
import ToastMessage from "components/toast Message/toastMessage";
import { GetMintStatusHook } from "hooks/web3Hooks";
import useForm from "hooks/useForm";
import validate from "pages/mintingNft/components/validateNumber";
import { MainModel } from "components/common";
// import validate from "./components/validateNumber";
const MintModal = ({ open, setShow }) => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setShow(false);
  console.log("opeee",open)

  const { web3, accounts, userBalance } = useAppSelector(
    (state) => state.web3Connect
  );
  const { loading } = useAppSelector((state) => state.getToken);
  const [num, setNum] = useState(0);
  const { botanikData } = useAppSelector((state) => state.model);
  const dispatch = useAppDispatch();
  const [mintLoading, setMintLoading] = useState(false);
  const [accountBalance, setAccountBalance] = useState(Number);
  const [status, setStatus] = useState(false);
  const { fee, feeLoading } = useAppSelector((state) => state.getFee);

  useEffect(() => {
    if (web3 && accounts) {
      const data = {
        accounts: accounts,
      };
      web3 && dispatch(getTokenRequest(data));
      web3 && dispatch(ownerAsync());
    }
  }, [web3, accounts]);
  useEffect(() => {
    const getUserEthBalance = async () => {
      if (accounts)
        setAccountBalance(Number(await web3.eth.getBalance(accounts)));
    };
    getUserEthBalance();
  }, [accounts]);
  useEffect(() => {
    dispatch(getFeeRequest());
    dispatch(mainModel(true));
  }, []);

  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    {
      dispatch(btkData());
    }
  }, []);
  const [connectModel, setConnectModel] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { web3LoadingErrorMessage } = useAppSelector(
    (state) => state.web3Connect
  );

  useEffect(() => {
    if (web3LoadingErrorMessage) {
      setShowToast(true);
    }
    setTimeout(() => {
      setShowToast(false);
    }, 6000);
  }, [web3LoadingErrorMessage]);

  const connectModelFn = () => {
    setConnectModel(true);
    setShow(false)
    dispatch(mainModel(true));
  };

  // custom hook.

  const validateFunc = async () => {
    if (
      botanikData?.isPaused ||
      botanikData?.totalSupply >= botanikData?.phaseLimit
    ) {
      setStatus(true);
      console.log("Status", status);
    } else {
      setStatus(false);
      console.log("Status", status);
    }
  };

  const mint = async () => {
    try {
      if (status) {
        alert("error");
      } else {
        // if (accountBalance > num * botanikData?.mintFee) {
        setMintLoading(true);
        const txn = await BotanikService.mint(web3, accounts, num);
        if (txn && txn.status) {
          ToastMessage("Success", "Transaction Successfull", "success");
        }
        if (txn && txn.code) {
          ToastMessage(" ", "Transaction Rejected by User", "error");
          ///////
        }
        dispatch(btkData());
        console.log(txn);
        validateFunc();
        setMintLoading(false);
        // }
        // else {
        //   ToastMessage(" ", "Not enough Eth Balance", "error");
        // }
      }
    } catch (error) {
      console.log(error);
      setMintLoading(false);
    }
  };

  const { data } = GetProofHook();
  const { whitelistStatus, mintPauseStatus } = GetMintStatusHook();
  const { handleSubmit, errors, setErrors, setIsSubmitting } = useForm(
    mint,
    validate,
    {
      num: num,
      nftleft: botanikData?.totalSupply - botanikData?.maxSupply,
      balance: accountBalance,
      nftFee: botanikData?.mintFee,
    }
  );

  console.log("errors", errors);

  //useEffects
  useEffect(() => {
    web3 && dispatch(userBalanceAsync());
  }, [web3]);
  return (
    <MintModalSection>
        <MainModel connectModel={connectModel} setShow={setShow} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxContainer>
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <HeaderSection>
                <Title>
                  Price per NFT
                  {botanikData
                    ? `: ${botanikData?.mintFee / 10 ** 18} ETH`
                    : " "}
                </Title>

                <InputField className="modelInput">
                  <InputNumbers
                    setIsSubmitting={setIsSubmitting}
                    validate={validate}
                    setErrors={setErrors}
                    error={errors.num}
                    num={num}
                    setNum={setNum}
                    remaingNftLength={
                      botanikData?.maxSupply - botanikData?.totalSupply
                    }
                    setStatus={setStatus}
                    botanikConfig={botanikData}
                    status={status}
                  />
                </InputField>
                {errors && errors.num && (
                  <p
                    className="help   text-center mt-1"
                    style={{ color: "white", fontSize: "0.9rem" }}
                  >
                    *{errors.num}
                  </p>
                )}
                {web3 ? (
                  <div className="mintBtn">
                    <MintButton
                      onClick={(event) => {
                        if (
                          botanikData?.totalSupply === botanikData?.maxSupply
                        ) {
                          openNotification(
                            "Supply Completed",
                            "Limit Reached",
                            "warning"
                          );
                        } else if (botanikData?.isPaused) {
                          openNotification(
                            "Paused",
                            "Minting paused",
                            "warning"
                          );
                        } else {
                          handleSubmit(event);
                        }
                      }}
                    >
                      Mint NFT
                    </MintButton>
                  </div>
                ) : (
                  <ConnectButton onClick={() => connectModelFn()}>
                    Connect Wallet
                  </ConnectButton>
                )}

                <Text>
                  Total Mint Price:{" "}
                  {(num * botanikData?.mintFee) / 10 ** 18 || 0}
                  <br />
                  <br />
                  <span>
                    NFTS Left:{" "}
                    {botanikData?.maxSupply - botanikData?.totalSupply || 0}/
                    {botanikData?.maxSupply || 0}
                  </span>
                </Text>
              </HeaderSection>
            </Typography>
          </Box>
        </BoxContainer>
      </Modal>
      
    </MintModalSection>
  );
};

export default MintModal;