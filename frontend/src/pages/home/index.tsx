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
import { LogoTitle, LogoDesc, MainWrapper,HomeSection,Title,InputField } from "./components/homeElement";
import img1 from '../../assets/images/img1.png'

// logo
import logo from "assets/images/mainlogo1.svg";
// redux Slice
import { mainModel } from "store/redux/slices/helperSlices/modelSlice";

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

  const preventMinus = (e) => {
    if (e.code === 'Minus') {
        e.preventDefault();
    }
};

  return (
    <div style={{ overflow: "hidden" }}>
      <Backdrop loading={loading} />
      {/* <MainRow>
        <MainCol>
          <MainWrapper>
            <LogoTitle src={logo} width={500}></LogoTitle>
            <LogoDesc>{count?.totalSupply}/10000</LogoDesc>
            <MintContent num={num} setNum={setNum} />
          </MainWrapper>
        </MainCol>
      </MainRow> */}

      <HomeSection>
        <div>
        <img src={img1} className="img1"/>
        </div>

        <Title>
          Total Price
        </Title>

        <InputField className="modelInput">
        <input  placeholder="Enter amount" type="number"  id="amount" min='0' onKeyPress={preventMinus}  />
        </InputField>


        
      </HomeSection>
    </div>
  );
};

export default Home;
