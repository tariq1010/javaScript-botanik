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
import {
  setPhaseSupplyAndPrice,
  withdrawEthWeb3,
} from "store/redux/slices/contractFunctions/write";
import SimpleBackdrop from "components/backdrop/backdrop";
import openNotification from "components/common/toatMessage/toastMessage";
import { getFeeRequest } from "store/redux/slices/getFeeSlice";
import NFTService from "services/nftServices";
import { BotanikService } from "web3Functions/botanik";
import { btkData } from "store/redux/slices/helperSlices/modelSlice";

const SetPhaseModal = () => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);

  const { web3, contract, accounts } = useAppSelector(
    (state) => state.web3Connect
  );
  const { botanikData } = useAppSelector((state) => state.model);

  // const handleSetPhase = async (value) => {
  //   try {
  //     setLoading(true);
  //     if (
  //       botanikData?.totalSupply + Number(value?.supply) <=
  //       botanikData?.maxSupply
  //     ) {
  //       const receipt = await BotanikService.setPhaseLimit(
  //         web3,
  //         accounts,
  //         Number(value?.supply)
  //       );
  //       if (receipt.status) {
  //         dispatch(btkData());
  //         setLoading(false);
  //         openNotification(
  //           "Successfull",
  //           "Minting Phase has been set!",
  //           "success"
  //         );
  //       } else {
  //         setLoading(false);
  //         openNotification("Error", "User denied transaction", "error");
  //       }
  //       console.log(receipt);
  //     } else {
  //       setLoading(false);
  //       openNotification("Error", "Invalid Phase Limit ", "error");
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     openNotification("Error", "Transaction failed", "error");
  //     console.log("error", error);
  //   }
  // };

  return (
    <>
      <SimpleBackdrop loading={loading} />

      <TransferMainModel>
        <TransferModelContent>
          <TransferCenterDiv>
            <Forms >
              <Forms.Item
                name="supply"
                rules={[
                  { required: true, message: "Enter new phase supply!" },
                  { pattern: /^[1-9]+[0-9]*$/, message: "Invalid value" },
                ]}
              >
                <InputField
                  min={0}
                  onKeyDown={(e) => {
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
                  }}
                  placeholder="Enter new phase supply"
                  type="number"
                />
              </Forms.Item>

              <TransferButton>Set Phase</TransferButton>
            </Forms>
          </TransferCenterDiv>
        </TransferModelContent>
      </TransferMainModel>
    </>
  );
};

export default SetPhaseModal;
