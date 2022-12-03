import React, { useState } from "react";
import {
  TransferMainModel,
  TransferModelContent,
  InputField,
  Forms,
  TransferButton,
  TransferCenterDiv,
} from "../transferOwnershipModel/transferElement";
import wallet from "assets/images/wallet.png";
import metamask from "assets/images/metamask.png";
import {
  loadBlockchain,
  loadWalletConnect,
} from "store/redux/slices/web3ConnectSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { withdrawEthWeb3 } from "store/redux/slices/contractFunctions/write";
import SimpleBackdrop from "components/backdrop/backdrop";
import { BotanikService } from "web3Functions/botanik";
import openNotification from "components/common/toatMessage/toastMessage";
import { btkData } from "store/redux/slices/helperSlices/modelSlice";

const UpdateFeeModel = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const { web3, contract, accounts } = useAppSelector(
    (state) => state.web3Connect
  );

  const handleSetFee= async (value) => {
    try {
      let amount = value?.amount;
      setLoading(true);
      const receipt = await BotanikService.setMintFee(web3, accounts,web3.utils.toWei(String(amount), 'ether'))
      if (receipt.status) {
        dispatch(btkData());
        setLoading(false);
        openNotification(
          "Successfull",
          "Mint price updated!",
          "success"
        );
      } else {
        setLoading(false);
        openNotification("Error", "User denied transaction", "error");
      }
      console.log(receipt);
      setLoading(false); 
    
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <SimpleBackdrop loading={loading} />

      <TransferMainModel>
        <TransferModelContent>
          <TransferCenterDiv>
            <Forms onFinish={handleSetFee}>
              <Forms.Item
                name="amount"
                rules={[
                  { required: true, message: "Enter Amount in Eth!" },
              
                ]}
              >
                <InputField   onKeyDown={(e) => {
                    console.log(e.code);
                    if (
                      e.code === "Minus" ||
                      e.code === "Equal" ||
                      e.code === "NumpadSubtract" ||
                      e.code === "NumpadAdd" ||
                      e.code === "KeyE"
                    ) {
                      e.preventDefault();
                    }
                  }} placeholder="Enter Amount in Eth!" type="number" />
              </Forms.Item>

              <TransferButton>Set fee</TransferButton>
            </Forms>
          </TransferCenterDiv>
        </TransferModelContent>
      </TransferMainModel>
    </>
  );
};

export default UpdateFeeModel;
