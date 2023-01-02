import { useEffect, useState } from "react";
import {
  Content,
} from "./adminLoginElements";
import { useAppDispatch, useAppSelector } from "store/store";
import SimpleBackdrop from "components/backdrop/backdrop";
import { mainModel } from "store/redux/slices/helperSlices/modelSlice";
import { MainModel } from "components/common";
import { LoginHook, OwnerHook } from "hooks/adminhooks";

const AdminLogin = () => {
  const { checkOwner } = OwnerHook();
  const { login } = LoginHook();
  //decalartions
  const dispatch = useAppDispatch();
  //useAppSelector
  
  
  const { web3, accounts } = useAppSelector(
    (state) => state.web3Connect
  );

  const { botanikLoader } = useAppSelector((state) => state.model);
  const [connectModel, setConnectModel] = useState(false);

  useEffect(() => {
    if (web3 && accounts) {
      login(accounts);
      checkOwner()
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
