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

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { GetSectionNineHook } from "hooks/sectionNineHook";
import { useEffect } from "react";
import { GetSectionTenHook } from "hooks/sectionTenHook";
import { GetBlogHook } from "hooks/blogHook";
import { useNavigate } from "react-router-dom";

function LastSection() {
const navigate=useNavigate()



  const {data,loading,getSectionNine}=GetSectionNineHook()
   const {data:sectionTen, getSectionTen} = GetSectionTenHook()
   const {data:blogs, getBlog} = GetBlogHook()

  useEffect(()=>{
    getSectionNine()
    getSectionTen()
    getBlog()
  },[])
 
  return (
    <LastSectionWrapper>
      <MainContainer>
        <ImageWrapper>
          <img src={data && data[0]?.image} alt="" className="img-fluid" />
          <TextContainer>
            <HeaderText>
            {data && data[0]?.heading}
            </HeaderText>
            <TextNote>
            {data && data[0]?.paragraph}
            </TextNote>
            <BuyBtn>Buy Tapera Jungle NFT</BuyBtn>
          </TextContainer>
        </ImageWrapper>
        <Wrapper>
          <MainRow>
            <MainCol lg={6}>
              <img className="img-fluid wrapperimg" src={sectionTen && sectionTen[0]?.image_one} />
            </MainCol>
            <MainCol lg={6}>
              <InnerContainer>
                <img className="img-fluid containerimg" src={sectionTen && sectionTen[0]?.image_two} />
                <ContainerText>
                  <p>
                  {sectionTen && sectionTen[0]?.text}
                  </p>
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
              {blogs?.map((item) => (
                <SwiperSlide>
                  <img key={item._id}  className="img-fluid swiperImg" src={item.image}
                  onClick={()=>navigate("/blogs/"+item._id)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperContainer>
          <SeeAllBtn>See All</SeeAllBtn>
        </BlogSection>
      </MainContainer>
    </LastSectionWrapper>
  );
}

export default LastSection;
