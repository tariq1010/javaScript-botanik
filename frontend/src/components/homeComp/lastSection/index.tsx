import { MainCol, MainContainer, MainRow } from "components/common";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
import { useEffect } from "react";
import { GetBlogHook } from "hooks/blogHook";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Swiper as SwiperCore } from "swiper/types";
import back from "../../../assets/images/back.png";
import next from "../../../assets/images/next.png";

function LastSection({ data, sectionTen }) {
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperCore>();
  const { data: blogs, getBlog } = GetBlogHook();

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <LastSectionWrapper>
      <MainContainer>
        <ImageWrapper>
          <LazyLoadImage
            src={data && data[0]?.image}
            alt=""
            className="img-fluid"
          />
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
            <BuyBtn onClick={() => navigate("/mint-nft")}>
              Buy Tapera Jungle NFT
            </BuyBtn>
          </TextContainer>
        </ImageWrapper>
        <Wrapper>
          <MainRow>
            <MainCol lg={6}>
              <LazyLoadImage
                className="img-fluid wrapperimg"
                src={sectionTen && sectionTen[0]?.image_one}
              />
            </MainCol>
            <MainCol lg={6}>
              <InnerContainer>
                <LazyLoadImage
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
                  <LazyLoadImage
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
                <LazyLoadImage className="img-fluid" src={back} />
              </PreviousButton>
              <NextButton
                className="swiper-button image-swiper-button-prev"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <LazyLoadImage className="img-fluid" src={next} />
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
