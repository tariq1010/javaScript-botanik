import React, { useEffect, useState } from "react";

import {
  ConnectModel,
  TransferModel,
  WithDrawModel,
  SetPhaseModal,
  UpdateFeeModel
} from "components/common/modal";

import { Modal } from "antd";
import { useAppDispatch, useAppSelector } from "store/store";

import { mainModel } from "store/redux/slices/helperSlices/modelSlice";

const MainModel = ({
  connectModel,
  transferModel,
  withDrawModel,
  setPhaseModal,
  feeModel,
  setShow
}: {
  connectModel?: any;
  transferModel?: any;
  withDrawModel?: any;
  setPhaseModal?: any;
  feeModel?:any
  setShow?:any;

}) => {
   console.log(" feeModa",feeModel)
  const [modal1Visible, setModal1Visible] = useState(false);

  const { web3 } = useAppSelector((state) => state.web3Connect);
  const { modelOpen } = useAppSelector((state) => state.model);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (modelOpen) {
      setModal1Visible(true);
      
    }
  }, [modelOpen]);

  const closeModel = () => {
    dispatch(mainModel(false));
    setModal1Visible(false);
  };


 
  return (
    <div>
      {web3 === null && connectModel ? (
        <Modal
          destroyOnClose={true}
          style={{ top: 20 }}
          visible={modal1Visible}
          centered
          onCancel={closeModel}
        >
          <ConnectModel  setShow={setShow}/>
        </Modal>
      ) : null}
      {web3 && transferModel ? (
        <Modal
          destroyOnClose={true}
          style={{ top: 20 }}
          visible={modal1Visible}
          centered
          onCancel={closeModel}
        >
          <TransferModel />
        </Modal>
      ) : null}

      {web3 && withDrawModel ? (
        <Modal
          destroyOnClose={true}
          style={{ top: 20 }}
          visible={modal1Visible}
          centered
          onCancel={closeModel}
        >
          <WithDrawModel />
        </Modal>
      ) : null}

      {web3 && setPhaseModal ? (
        <Modal
          destroyOnClose={true}
          style={{ top: 20 }}
          visible={modal1Visible}
          centered
          onCancel={closeModel}
        >
          <SetPhaseModal />
        </Modal>
      ) : null}

{web3 && feeModel ? (
        <Modal
          destroyOnClose={true}
          style={{ top: 20 }}
          visible={modal1Visible}
          centered
          onCancel={closeModel}
        >
          < UpdateFeeModel />
        </Modal>
      ) : null}

    </div>
  );
};

export default MainModel;
