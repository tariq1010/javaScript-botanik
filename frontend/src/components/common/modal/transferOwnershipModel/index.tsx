import React, { useState } from "react";
import {
  TransferMainModel,
  TransferModelContent,
  Forms,
  InputField,
  TransferButton,
  TransferCenterDiv,
} from "./transferElement";
import { useAppDispatch, useAppSelector } from "store/store";
import SimpleBackdrop from "components/backdrop/backdrop";
import { BotanikService } from "web3Functions/botanik";
import { btkData } from "store/redux/slices/helperSlices/modelSlice";
import openNotification from "components/common/toatMessage/toastMessage";

const TransferOwnershipModel = () => {
  const [loading, setLoading] = useState(false);
  const [owner, setNewOwner] = useState("");
  const dispatch = useAppDispatch();

  const { web3, contract, accounts } = useAppSelector(
    (state) => state.web3Connect
  );

  const transferOwnerShipFn = async () => {
    try {
      setLoading(true);
      console.log(owner);
      const receipt = await BotanikService.transferOwnership(
        web3,
        owner,
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

  return (
    <>
      <SimpleBackdrop loading={loading} />
      <TransferMainModel>
        <TransferModelContent>
          <TransferCenterDiv>
            <Forms>
              <Forms.Item
                name="newOwner"
                rules={[{ required: true, message: "Enter New Owner!" }]}
              >
                <InputField
                  onChange={(e) => setNewOwner(e.target.value)}
                  placeholder="Enter New Owner"
                  type="text"
                />
              </Forms.Item>
              <TransferButton onClick={transferOwnerShipFn}>
                Transfer Ownership
              </TransferButton>
            </Forms>
          </TransferCenterDiv>
        </TransferModelContent>
      </TransferMainModel>
    </>
  );
};

export default TransferOwnershipModel;
