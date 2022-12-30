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
import { EditSectionNineHook, GetSectionNineHook } from "hooks/sectionNineHook";
import { useEffect } from "react";
import { EditSectionTenHook, GetSectionTenHook } from "hooks/sectionTenHook";
import { GetBlogHook, SaveBlogHook } from "hooks/blogHook";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { Swiper as SwiperCore } from "swiper/types";
import back from "../../../assets/images/back.png";
import next from "../../../assets/images/next.png";
function LastSection() {
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperCore>();
  const sectionNineText = useRef(null);
  const sectionTenText = useRef(null);
  const sectionNineHeading = useRef(null);

  const [sectionNineFile, setSectionNineFile] = useState(null);
  const [sectionTenFile, setSectionTenFile] = useState(null);
  const [sectionTenFile2, setSectionTenFile2] = useState(null);

  const { data, loading, getSectionNine } = GetSectionNineHook();
  const { data: editNine, editSectionNine } = EditSectionNineHook();
  const { data: sectionTen, getSectionTen } = GetSectionTenHook();
  const { data: editTen, editSectionTen } = EditSectionTenHook();

  const { data: blogs, getBlog } = GetBlogHook();
  const { data: added, saveBlog } = SaveBlogHook();

  function handleSectionNine() {
    const obj = {
      heading: sectionNineHeading.current.innerHTML,
      paragraph: sectionNineText.current.innerHTML,
    };
    editSectionNine(data[0]._id, obj);
  }

  function handleSectionTen() {
    const obj = {
      text: sectionTenText.current.innerHTML,
    };
    editSectionTen(sectionTen[0]._id, obj);
  }

  useEffect(() => {
    if (added) {
      navigate("/blog-edit/" + added._id);
    }
  }, [added]);

  useEffect(() => {
    getSectionNine();
    setSectionNineFile(null);
  }, [editNine]);

  useEffect(() => {
    getSectionTen();
    setSectionTenFile2(null);
    setSectionTenFile(null);
  }, [editTen]);

  useEffect(() => {
    if (sectionNineFile) {
      editSectionNine(data[0]._id, sectionNineFile);
    }
  }, [sectionNineFile]);

  useEffect(() => {
    if (sectionTenFile) {
      const formData = new FormData();
      formData.append("image_one", sectionTenFile);
      editSectionTen(sectionTen[0]._id, formData);
    }
  }, [sectionTenFile]);

  useEffect(() => {
    if (sectionTenFile2) {
      const formData = new FormData();
      formData.append("image_two", sectionTenFile2);
      editSectionTen(sectionTen[0]._id, formData);
    }
  }, [sectionTenFile2]);

  useEffect(() => {
    getBlog();
  }, [added]);

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
            {data && (
              <HeaderText
                ref={sectionNineHeading}
                contentEditable
                onBlur={handleSectionNine}
                dangerouslySetInnerHTML={{ __html: data[0]?.heading }}
              />
            )}
            {data && (
              <TextNote
                ref={sectionNineText}
                contentEditable
                onBlur={handleSectionNine}
                dangerouslySetInnerHTML={{ __html: data[0]?.paragraph }}
              />
            )}
            <BuyBtn>Buy Tapera Jungle NFT</BuyBtn>
          </TextContainer>
        </ImageWrapper>
        <Wrapper>
          <MainRow>
            <MainCol lg={6}>
              <label htmlFor="ten" style={{ width: "100%" }}>
                <img
                  className="img-fluid wrapperimg"
                  src={sectionTen && sectionTen[0]?.image_one}
                />
              </label>
              <input
                type="file"
                style={{ display: "none" }}
                name="ten"
                id="ten"
                onChange={(e) => setSectionTenFile(e.target.files[0])}
              />
            </MainCol>
            <MainCol lg={6}>
              <InnerContainer>
                <label htmlFor="ten2" style={{ width: "100%" }}>
                  <img
                    className="img-fluid containerimg"
                    src={sectionTen && sectionTen[0]?.image_two}
                  />
                </label>

                <input
                  type="file"
                  style={{ display: "none" }}
                  name="ten2"
                  id="ten2"
                  onChange={(e) => setSectionTenFile2(e.target.files[0])}
                />
                <ContainerText>
                  {sectionTen && (
                    <p
                      ref={sectionTenText}
                      contentEditable
                      onBlur={handleSectionTen}
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
            <button
              onClick={() => {
                const data = {
                  heading: "deme headings",
                  content: "deme content",
                  image_path: "",
                };
                saveBlog(data);
              }}
              style={{
                background: "#daa520",
                padding: "5px 28px",
                marginBottom: "4px",
                position: "relative",
                marginLeft: "94%",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              {" "}
              +{" "}
            </button>

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
                    onClick={() => navigate("/blog-edit/" + item._id)}
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
          <SeeAllBtn>See All</SeeAllBtn>
        </BlogSection>
      </MainContainer>
    </LastSectionWrapper>
  );
}

export default LastSection;
