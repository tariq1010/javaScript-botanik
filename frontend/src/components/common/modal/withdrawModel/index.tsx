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

const WithDrawModel = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const { web3, contract, accounts } = useAppSelector(
    (state) => state.web3Connect
  );

  const handleWithdrawEthWeb3 = async (value) => {
    try {
      const amount = value?.amount;

      setLoading(true);
      const receipt = await withdrawEthWeb3(contract, accounts[0], (amount*10**18).toFixed(0).toString());
      setLoading(false);

      console.log(receipt);
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
                  { required: true, message: "Enter Amount!" },
                  {pattern:/(^[+]?\d*\.?\d*[0-9]+\d*$)|(^[+]?[0-9]+\d*\.\d*$)/, message:"Negative values not allowed" }
                ]}
              >
                <InputField  placeholder="Enter Amount!" type="number" />
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
