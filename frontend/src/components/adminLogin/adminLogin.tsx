import { useEffect, useState } from "react";
import {
  Content,
} from "./adminLoginElements";
import { useAppDispatch, useAppSelector } from "store/store";
import SimpleBackdrop from "components/backdrop/backdrop";
import { BotanikService } from "web3Functions/botanik";
import { Button } from "react-bootstrap";
import { btkData } from "store/redux/slices/helperSlices/modelSlice";
import { mainModel } from "store/redux/slices/helperSlices/modelSlice";
import { MainModel } from "components/common";
import { OwnerHook } from "hooks/adminhooks";

const AdminLogin = () => {
  const { checkOwner } = OwnerHook();
  //decalartions
  const dispatch = useAppDispatch();
  //useAppSelector
  const { credentials, loading, errorMessage, error } = useAppSelector(
    (state) => state.login
  );
  const { web3, contract, accounts } = useAppSelector(
    (state) => state.web3Connect
  );

  const { botanikData, botanikLoader } = useAppSelector((state) => state.model);
  const [connectModel, setConnectModel] = useState(false);

  //custom hooks

  useEffect(() => {
    if (web3 && accounts) {
      checkOwner();
    }
  }, [web3, accounts]);

  useEffect(() => {
    setConnectModel(true);
    dispatch(mainModel(true));
  }, []);

  return (
    <Content>
      <SimpleBackdrop loading={botanikLoader} />
      <MainModel connectModel={connectModel} />
      <p className="text-white">Only Admin Can Access.</p>
    </Content>
  );
};

export default AdminLogin;
