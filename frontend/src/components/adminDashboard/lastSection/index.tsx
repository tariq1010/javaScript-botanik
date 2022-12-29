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
  SwiperHeader,
  SwiperText,
} from "./element";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { EditSectionNineHook, GetSectionNineHook } from "hooks/sectionNineHook";
import { useEffect } from "react";
import { GetSectionTenHook } from "hooks/sectionTenHook";
import { GetBlogHook } from "hooks/blogHook";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { Swiper as SwiperCore } from "swiper/types";
import back from "../../../assets/images/back.png";
import next from "../../../assets/images/next.png";
function LastSection() {
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperCore>();
  const sectionNineText = useRef(null);
  const sectionSixText = useRef(null);
  const sectionNineHeading = useRef(null);

  const [sectionNineFile, setSectionNineFile] = useState(null);
  const [sectionsixFile, setSectionSixFile] = useState(null);
  const [sectionSevenFile, setSectionSevenFile] = useState(null);




  const { data, loading, getSectionNine } = GetSectionNineHook();
  const { data:editNine, editSectionNine } = EditSectionNineHook();
  const { data: sectionTen, getSectionTen } = GetSectionTenHook();
  const { data: blogs, getBlog } = GetBlogHook();

  function handleSectionNine() {
    const obj = {
      heading: sectionNineHeading.current.innerHTML,
      paragraph: sectionNineText.current.innerHTML,
    };
    editSectionNine(data[0]._id,obj);
  }


  useEffect(() => {
    getSectionTen();
    getBlog();
  }, []);


  useEffect(() => {
    getSectionNine();
   
  }, [editNine]);

  useEffect(() =>{
    if(sectionNineFile){
      editSectionNine(data[0]._id,sectionNineFile)
    }
  }, [sectionNineFile]);

  return (
    <LastSectionWrapper>
      <MainContainer>
        <ImageWrapper>
        <label htmlFor="nine" style={{ width: "100%" }}>

          <img src={data && data[0]?.image} alt="" className="img-fluid" />
          </label>
              <input
                type="file"
                style={{ display: "none" }}
                name="nine"
                id="nine"
                onChange={(e) => setSectionNineFile(e.target.files[0])}
              />
          <TextContainer>
            {data &&<HeaderText
            
            ref={sectionNineHeading}
                    contentEditable
                    onBlur={handleSectionNine}
                    dangerouslySetInnerHTML={{ __html: data[0]?.heading }}
            
           />}
            {data && <TextNote
            ref={sectionNineText}
            contentEditable
            onBlur={handleSectionNine}
            dangerouslySetInnerHTML={{ __html: data[0]?.paragraph }}
           />}
            <BuyBtn>Buy Tapera Jungle NFT</BuyBtn>
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
                  <p>{sectionTen && sectionTen[0]?.text}</p>
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
