import { MainCol, MainContainer, MainRow } from "components/common";
import {
  ImageWrapper,
  MainTextContainer,
  MainTextHeader,
  MainTextNote,
  MiddleSectionWrapper,
  SwiperContainer,
  Text,
  TextContainer,
  Wrapper,
  PreviousButton,
  NextButton,
} from "./element";
import menstanding from "../../../assets/images/menstanding.png";
import meninwoods from "../../../assets/images/meninwoods.png";
import map from "../../../assets/images/Map.png";
import swiperimg1 from "../../../assets/images/swiperimg1.png";
import swiperimg2 from "../../../assets/images/swiperimg2.png";
import swiperimg3 from "../../../assets/images/swiperimg3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Swiper as SwiperCore } from "swiper/types";
import back from "../../../assets/images/back.png";
import next from "../../../assets/images/next.png";
import { useRef } from "react";

function MiddleSection() {
  const swiperRef = useRef<SwiperCore>();

  const swiperData = [
    {
      image: swiperimg1,
    },
    {
      image: swiperimg2,
    },
    {
      image: swiperimg3,
    },
    {
      image: swiperimg1,
    },
    {
      image: swiperimg2,
    },
    {
      image: swiperimg3,
    },
    {
      image: swiperimg1,
    },
    {
      image: swiperimg2,
    },
    {
      image: swiperimg3,
    },
  ];
  return (
    <MiddleSectionWrapper>
      <MainContainer>
        <ImageWrapper>
          <img className="img-fluid" src={menstanding} alt="" />
          <TextContainer>
            <Text>A forest inventory has been initiated</Text>
            <Text>and label all large trees</Text>
            <Text> The GPS coordinates, species, and characteristics</Text>
            <Text>to list of each large tree are recorded</Text>
          </TextContainer>
        </ImageWrapper>

        <Wrapper>
          <MainRow>
            <MainCol lg={6} className="d-flex justify-content-center">
              <img src={meninwoods} alt="" className="img-fluid wrapperImg" />
            </MainCol>
            <MainCol lg={6} className="d-flex justify-content-center">
              <MainTextContainer>
                <MainTextHeader>
                  Initial collection <br />
                  of 8,000 original trees
                </MainTextHeader>
                <MainTextNote>
                  Trees over 10 cm in diameter were inventoried. Each tree was
                  marked with its location, species and characteristics. <br />
                  This forest inventory, together with physical demarcation,
                  land registration in the national registry (incra) and
                  occupation of the forest by foresters, is a powerful
                  initiative to combat deforestation and protect the Tapera
                  forest.
                </MainTextNote>
              </MainTextContainer>
            </MainCol>
          </MainRow>
        </Wrapper>
        <img className="img-fluid mapImg" src={map} />

        <SwiperContainer>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            grabCursor={true}
            navigation={false}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="mySwiper"
            breakpoints={{
              100: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
          >
            {swiperData.map((item) => (
              <SwiperSlide>
                <img className="img-fluid swiperImg" src={item.image} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="btnWrapper">
            <PreviousButton
              className="swiper-button image-swiper-button-next"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img className="img-fluid" src={back} />
            </PreviousButton>
            <NextButton
              className="swiper-button image-swiper-button-prev"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img className="img-fluid" src={next} />
            </NextButton>
          </div>
        </SwiperContainer>
      </MainContainer>
    </MiddleSectionWrapper>
  );
}

export default MiddleSection;
