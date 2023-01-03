import { MainCol, MainContainer, MainRow } from "components/common";
import {
  ImageWrapper,
  LastSectionWrapper,
  TextContainer,
  HeaderText,
  TextNote,
  BuyBtn,
  InnerContainer,
  Wrapper,
  ContainerText,
  BlogSection,
  BlogHeader,
  SwiperContainer,
  NextButton,
  PreviousButton,
  SeeAllBtn,
} from "./element";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { Swiper as SwiperCore } from "swiper/types";
import back from "../../../assets/images/back.png";
import next from "../../../assets/images/next.png";
import MintModal from "components/common/modal/mintModal";

function LastSection({ data, sectionTen, blogs }) {
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperCore>();
 
  const [show, setshow] = useState(false);
  return (
    <LastSectionWrapper>
      <MainContainer>
        <ImageWrapper>
          <img src={data && data[0]?.image} alt="" className="img-fluid" />
          <TextContainer>
            {data && (
              <HeaderText
                dangerouslySetInnerHTML={{ __html: data[0]?.heading }}
              />
            )}
            {data && (
              <TextNote
                dangerouslySetInnerHTML={{ __html: data[0]?.paragraph }}
              />
            )}
            <BuyBtn  onClick={() => setshow(true)}>
              Buy Tapera Jungle NFT
            </BuyBtn>
            <MintModal open={show} setShow={setshow} />
          </TextContainer>
        </ImageWrapper>
        <Wrapper>
          <MainRow>
            <MainCol lg={6}>
              <img
                className="img-fluid wrapperimg"
                src={sectionTen && sectionTen[0]?.image_one}
              />
            </MainCol>
            <MainCol lg={6}>
              <InnerContainer>
                <img
                  className="img-fluid containerimg"
                  src={sectionTen && sectionTen[0]?.image_two}
                />
                <ContainerText>
                  {sectionTen && (
                    <p
                      dangerouslySetInnerHTML={{ __html: sectionTen[0]?.text }}
                    />
                  )}
                </ContainerText>
              </InnerContainer>
            </MainCol>
          </MainRow>
        </Wrapper>
        <BlogSection>
          <BlogHeader>Our Blog</BlogHeader>
          <SwiperContainer>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              grabCursor={true}
              navigation={false}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
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
              {blogs?.map((item) => (
                <SwiperSlide>
                  <img
                    key={item._id}
                    className="img-fluid swiperImg"
                    src={item.image}
                    onClick={() => navigate("/blogs/" + item._id)}
                  />
                  <h4 dangerouslySetInnerHTML={{ __html: item.heading }} />
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        item.content.slice(0, 125) +
                        (item.content.length > 125 ? "..." : ""),
                    }}
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
          <SeeAllBtn>See All</SeeAllBtn>
        </BlogSection>
      </MainContainer>
    </LastSectionWrapper>
  );
}

export default LastSection;
