import React, { useState } from "react";
import {
  TransferMainModel,
  TransferModelContent,
  Forms,
  InputField,
  TransferButton,
  TransferCenterDiv,
} from "./transferElement";
import wallet from "assets/images/wallet.png";
import metamask from "assets/images/metamask.png";
import {
  loadBlockchain,
  loadWalletConnect,
} from "store/redux/slices/web3ConnectSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { transferOwnership } from "store/redux/slices/contractFunctions/write";
import SimpleBackdrop from "components/backdrop/backdrop";
import { BotanikService } from "web3Functions/botanik";
import { btkData } from "store/redux/slices/helperSlices/modelSlice";
import openNotification from "components/common/toatMessage/toastMessage";

const TransferOwnershipModel = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const { web3, contract, accounts } = useAppSelector(
    (state) => state.web3Connect
  );

  const transferOwnerShipFn = async (value:any) => {
    try {
      setLoading(true)
      const newOwner = value?.newOwner;
      console.log(newOwner);
      const receipt = await BotanikService.transferOwnership(web3, newOwner,accounts);
      if(receipt.status){
        dispatch(btkData());
         setLoading(false);
         openNotification('Successfull', 'Transaction successful', 'success')
       }
     
       else{
         setLoading(false);
         openNotification('Error', 'User denied transaction', 'error')
       }
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
            <Forms onFinish={transferOwnerShipFn}>
              <Forms.Item
                name="newOwner"
                rules={[{ required: true, message: "Enter New Owner!" }]}
              >
                <InputField placeholder="Enter New Owner" type="text" />
              </Forms.Item>
              <TransferButton> Transfer Ownership</TransferButton>
            </Forms>
          </TransferCenterDiv>
        </TransferModelContent>
      </TransferMainModel>
    </>
  );
};

export default TransferOwnershipModel;
