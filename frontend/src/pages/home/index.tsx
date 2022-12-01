import React, { useEffect, useState } from "react";
import Backdrop from "../../components/backdrop/backdrop";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { getTokenRequest } from "../../store/redux/slices/tokenSlice";
import MintContent from "./components/mintContent";
import { ownerAsync, userBalanceAsync } from "../../store/redux/slices/web3ConnectSlice";
import { getFeeRequest } from "../../store/redux/slices/getFeeSlice";
import env from "../../enviornment";
import s1 from "../../assets/images/s1.png";
// import img from '../../assets/images/nextArrow.svg'
import img from '../../assets/images/prevArrow.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import ConnectWallet from "components/connect wallet/connectWallet";
import { MainModel, openNotification } from "components/common";
import { GetProofHook } from "hooks/whiteListAddressHooks";
import useForm from "hooks/useForm";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import { BotanikService } from "web3Functions/botanik";
import ToastMessage from "components/toast Message/toastMessage";

// import required modules
import { EffectCoverflow, Pagination,Navigation } from "swiper";

import { MainRow, MainCol, MainContainer } from "components/common";
import {
  LogoTitle,
  LogoDesc,
  MainWrapper,
  HeroSection,
  Title,
  InputField,
  Button,
  Text,
  HeaderSection,
  JungleSection,
  JungleTitle,
  JungleDescription,
  GallerySection,
  GalleryTitle,
  GallerySwiper,
  ContactSection,
  ContactTitle,
  ContactButton,
  FooterText
} from "./components/homeElement";
import img1 from "../../assets/images/img1.png";

// logo
import logo from "assets/images/mainlogo1.svg";
// redux Slice
import { btkData, mainModel } from "store/redux/slices/helperSlices/modelSlice";
import validate from "./components/validateNumber";
import { GetMintStatusHook } from "hooks/web3Hooks";
import InputNumbers from "./components/inputNumbers";

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
  const { web3, accounts,userBalance } = useAppSelector((state) => state.web3Connect);
  const { loading } = useAppSelector((state) => state.getToken);
  const [num, setNum] = useState(0);
  const { botanikData } = useAppSelector((state) => state.model);
  const dispatch = useAppDispatch();
  const [mintLoading, setMintLoading] = useState(false);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (web3 && accounts) {
      const data = {
        accounts: accounts,
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
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    {
      dispatch(btkData());
    }
  }, []);
  const [connectModel, setConnectModel] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { web3LoadingErrorMessage } = useAppSelector((state) => state.web3Connect);

  useEffect(() => {
      if (web3LoadingErrorMessage) {
          setShowToast(true);
      }
      setTimeout(() => {
          setShowToast(false);
      }, 6000);
  }, [web3LoadingErrorMessage]);

  const connectModelFn = () => {
      setConnectModel(true);
      dispatch(mainModel(true));
  };

  // custom hook.

  const validateFunc = async() => {
    if(botanikData?.isPaused || botanikData?.totalSupply >= botanikData?.phaseLimit){
     setStatus(true);
     console.log("Status", status);
    }
    else {
     setStatus(false);
     console.log("Status", status);
    }
   }

  const mint = async () => {
    try {
      if(status) {
        alert("error")
      }
      else {
      setMintLoading(true);
      const txn = await BotanikService.mint(web3, accounts, num)
      if(txn && txn.status) {
        ToastMessage("Success","Transaction Successfull","success")
      }
      if(txn && txn.code) {
        ToastMessage(" ", "Transaction Rejected by User", "error");
      }
      dispatch(btkData());
      console.log(txn);
      validateFunc();
      setMintLoading(false);
      }
    } catch (error) {
      console.log(error);
      setMintLoading(false);
    
    }
  };

  const { data } = GetProofHook();
  const { whitelistStatus, mintPauseStatus } = GetMintStatusHook();
  const { handleSubmit, errors, setErrors, setIsSubmitting } = useForm(
    mint,
    validate,
    {
      num: num,
      nftleft: botanikData?.totalSupply -  botanikData?.phaseLimit,
      balance: userBalance,
    }
  );

  //useEffects
  useEffect(() => {
    web3 && dispatch(userBalanceAsync());
  }, [web3]);

  return (
    <div style={{ overflow: "hidden" }}>
      <Backdrop loading={loading} />
      {/* <MainRow>
        <MainCol>
          <MainWrapper>
            <LogoTitle src={logo} width={500}></LogoTitle>
            <LogoDesc>{botanikData?`${botanikData?.totalSupply}/${botanikData?.maxSupply}` : ""}</LogoDesc>
            <MintContent num={num} setNum={setNum} />
          </MainWrapper>
        </MainCol>
      </MainRow> */}

      <HeroSection>
        <div className="mainImage">
          <img src={img1} />
        </div>

        <HeaderSection>
          <Title>
            {botanikData
              ? `${botanikData?.totalSupply}/${botanikData?.maxSupply}`
              : ""}
          </Title>

          <InputField className="modelInput">
            <InputNumbers
              setIsSubmitting={setIsSubmitting}
              validate={validate}
              setErrors={setErrors}
              error={errors.num}
              num={num}
              setNum={setNum}
              remaingNftLength={
                botanikData?.phaseLimit - botanikData?.totalSupply
              }
              setStatus={setStatus}
              botanikConfig={botanikData}
              status={status}
            />
          </InputField>
          {web3 ? (
            <Button
              onClick={(event) => {
                if (botanikData?.totalSupply === botanikData?.phaseLimit) {
                  openNotification(
                    "Phase Completed",
                    "Current phase of minting in finished",
                    "warning"
                  );
                } else if (botanikData?.isPaused) {
                  openNotification("Paused", "Minting paused", "warning");
                } else {
                  handleSubmit(event);
                }
              }}
            >
              <button>Mint NFT</button>
            </Button>
          ) : (
            <Button onClick={() => connectModelFn()}>
              <button>Connect Wallet</button>
            </Button>
          )}

          <Text>
            Mint Price: 0.0001
            <br />
            <br />
            <span>NFTS Left: 6647</span>
          </Text>
        </HeaderSection>

        <JungleSection>
          <div className="overlayBg">
            <MainContainer>
              <div>
                <JungleTitle>Tapera Jungle</JungleTitle>

                <JungleDescription>
                  The Tapera jungle project aims to preserve and give value to
                  the Tapera forest in the Amazon, in the village of Urucara.
                  <br />
                  <br />
                  This area has been protected by a group of local farmers since
                  2003, and they have designated a few dozen plots of native
                  forest so that local residents can enjoy this natural space
                  and the forest's exuberance.
                  <br />
                  <br /> But for several years now, wood theft and illegal
                  invasions have become more and more frequent, and many
                  producers have lost their land, which is now occupied by
                  illegal loggers or by ranchers who are beginning to transform
                  the forest into pasture for their livestock.
                  <br />
                  <br /> The Tapera project is a private initiative of the
                  Agro-Frut cooperative in Urucara and a group of botanical and
                  nature enthusiasts, which aims to recover ownership of these
                  lands, restore and protect them, while valuing this treasure
                  of biodiversity, which has more than 100 species of trees.
                  <br />
                  <br /> Thus, several plots have already been bought from
                  illegal sawmills, located in Sao Sebastiao, a village next to
                  Urucara, where the majority of sawmills are located, all in an
                  irregular situation.
                  <br />
                  <br />
                  Demarcations are underway, with the installation of fences
                  that materialize the limits of the properties, by installing a
                  post every 4 meters. The first observatory was built to house
                  the rangers.
                  <br />
                  <br /> Additionally, a forest inventory has been initiated to
                  list and tag all trees larger than 10 cm in diameter, and each
                  tree ishis forest inventory, together with physical
                  demarcation work, registration of parcels in the national
                  regiand occupation of the forest by forest rangers, represents
                  a strong initiative to combat deforestation and protect the
                  Tapera Forest. form.
                  <br />
                  <br /> To publish the Tapera Jungle project, an initial
                  collection of his 8,000 original digital artwork of Amazon
                  trees was created, each image associated with a tree in
                  inventory in the form of his NFT.
                  <br />
                  <br />
                  In exchange for your purchase of one or more NFTs, you will be
                  able to become a member of the Tapera Jungle club,where you
                  will have access to all information and activities related to
                  the project, as well as the chance to visit the forest and
                  take part in the extraordinary Amazonian biodiversity
                  conservation project. The Tapera Jungle project is exclusively
                  financed by the sale of these NFTs, and will be able to
                  continue to develop and expand into new areas of native
                  forests currently at risk of extinction through the sale of
                  these NFTs.
                </JungleDescription>
              </div>
            </MainContainer>
          </div>
        </JungleSection>

        <GallerySection>
          <GalleryTitle>Gallery</GalleryTitle>

          <GallerySwiper>
            <Swiper
              // activeSlideKey='2'
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
              }}
              // scrollbar={{draggable:true}}
              navigation={true}
              initialSlide={2}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={s1} />
              </SwiperSlide>

              <SwiperSlide>
                <img src={s1} />
              </SwiperSlide>

              <SwiperSlide>
                <img src={s1} />
              </SwiperSlide>

              <SwiperSlide>
                <img src={s1} />
              </SwiperSlide>

              <SwiperSlide>
                <img src={s1} />
              </SwiperSlide>
            </Swiper>
          </GallerySwiper>

          <ContactSection>
            <ContactTitle>contact@taperajungle.com</ContactTitle>

            <ContactButton>
              <button>Contact Us</button>
            </ContactButton>
          </ContactSection>

          <FooterText>Copyright ©taperajungle. All Rights Reserved</FooterText>
        </GallerySection>
      </HeroSection>
      <MainModel connectModel={connectModel} />
    </div>
  );
};

export default Home;
