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
  SeeAllBtn,
} from "./element";
import forest from "../../../assets/images/forest.png";
import animatedjungle from "../../../assets/images/animatedjungle.png";
import manpainting from "../../../assets/images/manpainting.png";
import swiperimg1 from "../../../assets/images/swiperimg1.png";
import swiperimg2 from "../../../assets/images/swiperimg2.png";
import swiperimg3 from "../../../assets/images/swiperimg3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

function LastSection() {
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
    <LastSectionWrapper>
      <MainContainer>
        <ImageWrapper>
          <img src={forest} alt="" className="img-fluid" />
          <TextContainer>
            <HeaderText>
              In exchange for your purchase of one or more NFTs, you will be
              able to become a member of the Tapera Jungle club
            </HeaderText>
            <TextNote>
              you will have access to all information and activities related to
              the project, as well as the <br /> chance to visit the forest and
              take part in the extraordinary <br /> Amazonian biodiversity
              conservation project.
            </TextNote>
            <BuyBtn>Buy TaperaJungle NTF</BuyBtn>
          </TextContainer>
        </ImageWrapper>
        <Wrapper>
          <MainRow>
            <MainCol lg={6}>
              <img className="img-fluid wrapperimg" src={animatedjungle} />
            </MainCol>
            <MainCol lg={6}>
              <InnerContainer>
                <img className="img-fluid containerimg" src={manpainting} />
                <ContainerText>
                  <p>
                    We preserve and provide the values of the Tapera forest in
                    the Amazon, in the village of Uruсara
                  </p>
                </ContainerText>
              </InnerContainer>
            </MainCol>
          </MainRow>
        </Wrapper>
        <BlogSection>
          <BlogHeader>Our Blog</BlogHeader>
          {/* <SwiperContainer>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            grabCursor={true}
            navigation={true}
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
            <SwiperSlide>
              <img className="img-fluid swiperImg" src={swiperimg1} />
            </SwiperSlide>
          </Swiper>
          </SwiperContainer> */}
          <SeeAllBtn>See All</SeeAllBtn>
        </BlogSection>
      </MainContainer>
    </LastSectionWrapper>
  );
}

export default LastSection;
