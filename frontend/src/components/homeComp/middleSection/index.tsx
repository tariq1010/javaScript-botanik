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

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { GetSectionFiveHook } from "hooks/sectionFiveHook";
import { useEffect } from "react";
import { GetSectionSixHook } from "hooks/sectionSixHook";
import { GetSectionEightHook } from "hooks/sectionEightHook";
import { GetSectionSevenHook } from "hooks/sectionSevenHook";
import { Swiper as SwiperCore } from "swiper/types";
import back from "../../../assets/images/back.png";
import next from "../../../assets/images/next.png";
import { useRef } from "react";

function MiddleSection() {
  const swiperRef = useRef<SwiperCore>();
  const { data, getSectionFive } = GetSectionFiveHook();
  const { data: sectionSix, getSectionSix } = GetSectionSixHook();
  const { data: carousel, getSectionEight } = GetSectionEightHook();
  const { data: sectionSeven, getSectionSeven } = GetSectionSevenHook();

  useEffect(() => {
    getSectionFive();
    getSectionSix();
    getSectionEight();
    getSectionSeven();
  }, []);

  return (
    <MiddleSectionWrapper>
      <MainContainer>
        <ImageWrapper>
          <img className="img-fluid" src={data && data[0]?.image} alt="" />
          <TextContainer>
            {data && (
              <Text dangerouslySetInnerHTML={{ __html: data[0]?.text }} />
            )}
          </TextContainer>
        </ImageWrapper>

        <Wrapper>
          <MainRow>
            <MainCol lg={6} className="d-flex justify-content-center">
              <img
                src={sectionSix && sectionSix[0]?.image}
                alt=""
                className="img-fluid wrapperImg"
              />
            </MainCol>
            <MainCol lg={6} className="d-flex justify-content-center">
              <MainTextContainer>
                {sectionSix && (
                  <MainTextHeader
                    dangerouslySetInnerHTML={{ __html: sectionSix[0]?.heading }}
                  />
                )}
                {sectionSix && (
                  <MainTextNote
                    dangerouslySetInnerHTML={{
                      __html: sectionSix[0]?.paragraph_one,
                    }}
                  />
                )}
              </MainTextContainer>
            </MainCol>
          </MainRow>
        </Wrapper>
        <img
          className="img-fluid mapImg"
          src={sectionSeven && sectionSeven[0]?.image}
        />

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
            {carousel?.map((item) => (
              <SwiperSlide>
                <img
                  key={item._id}
                  className="img-fluid swiperImg"
                  src={item.image}
                />
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
