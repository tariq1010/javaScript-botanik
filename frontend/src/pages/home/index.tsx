import React, { useEffect, useState } from "react";
import Backdrop from "../../components/backdrop/backdrop";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { getTokenRequest } from "../../store/redux/slices/tokenSlice";
import MintContent from "./components/mintContent";
import { ownerAsync } from "../../store/redux/slices/web3ConnectSlice";
import { getFeeRequest } from "../../store/redux/slices/getFeeSlice";
import env from "../../enviornment";

import { MainRow, MainCol } from "components/common";
import { LogoTitle, LogoDesc, MainWrapper } from "./components/homeElement";

// logo
import logo from "assets/images/mainlogo1.svg";
// redux Slice
import { btkData, mainModel } from "store/redux/slices/helperSlices/modelSlice";

type Props = {
  battleDesc?: boolean;
  incrementBtn?: boolean;
  decrementBtn?: boolean;
  isRevealMain?: boolean;
};

const Home: React.FC<Props> = ({
  isRevealMain,
}: {
  isRevealMain?: boolean;
}) => {
  const { count } = useAppSelector((state) => state.mintNft);
  const { web3, accounts } = useAppSelector((state) => state.web3Connect);
  const { loading } = useAppSelector((state) => state.getToken);
  const [num, setNum] = useState(0);
  const { botanikData} = useAppSelector(
    (state) => state.model
  );
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (web3 && accounts[0]) {
      const data = {
        accounts: accounts[0],
      };
      web3 && dispatch(getTokenRequest(data));
      web3 && dispatch(ownerAsync());
    }
  }, [web3, accounts]);

  useEffect(() => {
    dispatch(getFeeRequest());
    dispatch(mainModel(true));
  }, []);
  useEffect(()=>{
    
    {
      dispatch(btkData());
    }
   },[])
  return (
    <div style={{ overflow: "hidden" }}>
      <Backdrop loading={loading} />
      <MainRow>
        <MainCol>
          <MainWrapper>
            <LogoTitle src={logo} width={500}></LogoTitle>
            <LogoDesc>{botanikData?`${botanikData?.totalSupply}/${botanikData?.maxSupply}` : ""}</LogoDesc>
            <MintContent num={num} setNum={setNum} />
          </MainWrapper>
        </MainCol>
      </MainRow>
    </div>
  );
};

export default Home;
