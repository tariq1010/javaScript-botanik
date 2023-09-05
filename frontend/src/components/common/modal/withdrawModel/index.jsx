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

const WithDrawModel = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const { web3, contract, accounts } = useAppSelector(
    (state) => state.web3Connect
  );

  const handleWithdrawEthWeb3 = async (value) => {
    try {
      const to = value?.amount;

      setLoading(true);
      const receipt = await BotanikService.withdraw(web3,to,accounts);
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
            <Forms onFinish={handleWithdrawEthWeb3}>
              <Forms.Item
                name="amount"
                rules={[
                  { required: true, message: "Enter Address!" },
              
                ]}
              >
                <InputField  placeholder="Enter Address!" type="text" />
              </Forms.Item>

              <TransferButton>Withdraw</TransferButton>
            </Forms>
          </TransferCenterDiv>
        </TransferModelContent>
      </TransferMainModel>
    </>
  );
};

export default WithDrawModel;
