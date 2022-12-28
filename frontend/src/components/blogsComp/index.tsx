import { Footer, Navbar } from "components";
import { MainCol, MainContainer, MainRow } from "components/common";
import {
  BlogHeader,
  BlogSection,
  BlogWrapper,
  ImageWrapper,
  PostContainer,
  PostHeader,
  PostText,
  SwiperContainer,
  SwiperHeader,
  SwiperText,
  ImageContainer,
  TextContainer,
  TextNote,
  HeaderText,
  BuyBtn,
} from "./element";
import bikerheader from "../../assets/images/bikerheader.png";
import swiperimg1 from "../../assets/images/swiperimg1.png";
import swiperimg2 from "../../assets/images/swiperimg2.png";
import swiperimg3 from "../../assets/images/swiperimg3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import forest from "../../assets/images/forest.png";

function BlogsCom() {
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
    <BlogWrapper>
      <Navbar />
      <MainContainer className="mainContainer">
        <ImageWrapper>
          <img className="img-fluid" src={bikerheader} />
        </ImageWrapper>
        <PostContainer>
          <MainRow>
            <MainCol lg={6}>
              <PostHeader>Post Title</PostHeader>
              <PostText>
                They have designated a few dozen plots of native forest so that
                local residents can enjoy this natural space and the forest's
                exuberance. But for several years now, wood theft and illegal
                invasions have become more and more frequent, and many producers
                have lost their land, which is now occupied by illegal loggers
                or by ranchers who are beginning to transform the forest into
                pasture for their livestock.They have designated a few dozen
                plots of native forest so that local residents can enjoy this
                natural space and the forest's exuberance. But for several years
                now, wood theft and illegal invasions have become more and more
                frequent, and many producers have lost their land, which is now
                occupied by illegal loggers or by ranchers who are beginning to
                transform the forest into pasture for their livestock.
              </PostText>
            </MainCol>
            <MainCol lg={6}>
              <PostHeader>Post Title</PostHeader>
              <PostText>
                They have designated a few dozen plots of native forest so that
                local residents can enjoy this natural space and the forest's
                exuberance. But for several years now, wood theft and illegal
                invasions have become more and more frequent, and many producers
                have lost their land, which is now occupied by illegal loggers
                or by ranchers who are beginning to transform the forest into
                pasture for their livestock.They have designated a few dozen
                plots of native forest so that local residents can enjoy this
                natural space and the forest's exuberance. But for several years
                now, wood theft and illegal invasions have become more and more
                frequent, and many producers have lost their land, which is now
                occupied by illegal loggers or by ranchers who are beginning to
                transform the forest into pasture for their livestock.
              </PostText>
            </MainCol>
          </MainRow>
        </PostContainer>
        <BlogSection>
          <BlogHeader>Our Blog</BlogHeader>
        </BlogSection>
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
            {swiperData.map((item) => (
              <SwiperSlide>
                <img className="img-fluid swiperImg" src={item.image} />
                <SwiperHeader>Post title post title Post title</SwiperHeader>
                <SwiperText>
                  You will have access to all information and activities related
                  to the project, as well as the...
                </SwiperText>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
        <ImageContainer>
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
            <BuyBtn>Buy Tapera Jungle NFT</BuyBtn>
          </TextContainer>
        </ImageContainer>
      </MainContainer>
      <Footer />
    </BlogWrapper>
  );
}

export default BlogsCom;
