import { Footer, Navbar } from "components";
import { MainCol, MainContainer, MainRow } from "components/common";
import {
  BlogHeader,
  BlogSection,
  BlogWrapper,
  ImageWrapper,
  PostContainer,
  PostHeader,
  SwiperContainer,
  SwiperHeader,
  SwiperText,
  ImageContainer,
  TextContainer,
  TextNote,
  HeaderText,
  BuyBtn,
  PostTextFirst,
  PreviousButton,
  NextButton,
  PostTextSecond,
} from "./element";
import bikerheader from "../../assets/images/bikerheader.png";
import swiperimg1 from "../../assets/images/swiperimg1.png";
import swiperimg2 from "../../assets/images/swiperimg2.png";
import swiperimg3 from "../../assets/images/swiperimg3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import forest from "../../assets/images/forest.png";
import { GetBlogByIdHook, GetBlogHook } from "hooks/blogHook";
import { useEffect } from "react";
import { Swiper as SwiperCore } from "swiper/types";
import back from "../../assets/images/back.png";
import next from "../../assets/images/next.png";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { GetSectionNineHook } from "hooks/sectionNineHook";
function BlogsCom() {
  const { id } = useParams();
  const [selectBlog, setSelectBlog] = useState();
  const { data: sectionNine, getSectionNine } = GetSectionNineHook();
  const {
    data: blogById,
    getBlogById,
    loading: load,
    setData,
  } = GetBlogByIdHook();
  const { data, getBlog, loading } = GetBlogHook();

  useEffect(() => {
    getBlog();
    getSectionNine();
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    if (id) {
      getBlogById(id);
    }
  }, [id]);

  useEffect(() => {
    if (selectBlog) {
      const selected = data.find((x) => x._id == selectBlog);
      setData(selected);
      window.scroll(0, 0);
    }
  }, [selectBlog]);

  const swiperRef = useRef<SwiperCore>();
  const firstSwiperRef = useRef<SwiperCore>();

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
          <img className="img-fluid" src={blogById?.image} />
        </ImageWrapper>
        <PostContainer>
          <PostHeader>{blogById?.heading}</PostHeader>
          <div className="postWrapper">
            <div>
              <PostTextFirst>
                {blogById?.content}
                {/* <br />
                <br /> */}
                {/* They have designated a few dozen plots of native forest so that
                local residents can enjoy this natural space and the forest's
                exuberance. But for several years now, wood theft and illegal
                invasions have become more and more frequent, and many producers
                have lost their land, which is now occupied by illegal loggers
                or by ranchers who are beginning to transform the forest into
                pasture for their livestock. */}
              </PostTextFirst>
            </div>
            <div>
              {/* <PostTextSecond>
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
                <br />
                <br />
                They have designated a few dozen plots of native forest so that
                local residents can enjoy this natural space and the forest's
                exuberance. But for several years now, wood theft and illegal
                invasions have become more and more frequent, and many producers
                have lost their land, which is now occupied by illegal loggers
                or by ranchers who are beginning to transform the forest into
                pasture for their livestock.
              </PostTextSecond> */}
            </div>
          </div>
        </PostContainer>
        {/* <BlogSection>
          <BlogHeader>Our Blog</BlogHeader>
        </BlogSection> */}
        {/* <SwiperContainer>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            grabCursor={true}
            navigation={false}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              firstSwiperRef.current = swiper;
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
            {data?.map((item) => (
              <SwiperSlide>
                <img className="img-fluid swiperImg" src={item.image} 
                onClick={()=>setSelectBlog(item._id)}
                />
                <SwiperHeader>{item.heading}</SwiperHeader>
                <SwiperText>
                {item.content.slice(0,50)}
                </SwiperText>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="btnWrapper">
            <PreviousButton
              className="swiper-button image-swiper-button-next"
              onClick={() => firstSwiperRef.current?.slidePrev()}
            >
              <img className="img-fluid" src={back} />
            </PreviousButton>
            <NextButton
              className="swiper-button image-swiper-button-prev"
              onClick={() => firstSwiperRef.current?.slideNext()}
            >
              <img className="img-fluid" src={next} />
            </NextButton>
          </div>
          
         
        </SwiperContainer> */}
        <ImageContainer>
          <img
            src={sectionNine && sectionNine[0]?.image}
            alt=""
            className="img-fluid"
          />
          <TextContainer>
            <HeaderText>{sectionNine && sectionNine[0]?.heading}</HeaderText>
            <TextNote>{sectionNine && sectionNine[0]?.paragraph}</TextNote>
            <BuyBtn>Buy Tapera Jungle NFT</BuyBtn>
          </TextContainer>
        </ImageContainer>
      </MainContainer>
      <Footer />
    </BlogWrapper>
  );
}

export default BlogsCom;
