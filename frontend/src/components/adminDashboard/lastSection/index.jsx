import { Loader, MainCol, MainContainer, MainRow } from "components/common";
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
  AddCarouselImages,
  DeleteBtn,
  SwiperImgContainer,
  UploadImage,
  UploadImagedDiv,
  WrapperImg,
  InnerContainerImg,
} from "./element";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { EditSectionNineHook, GetSectionNineHook } from "hooks/sectionNineHook";
import { useEffect } from "react";
import { EditSectionTenHook, GetSectionTenHook } from "hooks/sectionTenHook";
import { DeletelogHook, GetBlogHook, SaveBlogHook } from "hooks/blogHook";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import back from "../../../assets/images/back.png";
// import next from "../../../assets/images/next.png";
import next from "../../../assets/images/next.png";
import { Tooltip } from "antd";
import { storage } from "../../../firebase";

function LastSection() {
  const navigate = useNavigate();
  const swiperRef = useRef();
  const sectionNineText = useRef(null);
  const sectionTenText = useRef(null);
  const sectionNineHeading = useRef(null);

  const [sectionNineFile, setSectionNineFile] = useState(null);
  const [sectionTenFile, setSectionTenFile] = useState(null);
  const [sectionTenFile2, setSectionTenFile2] = useState(null);

  const { data, loading, getSectionNine } = GetSectionNineHook();
  const { loading: loading7, deleteBlog } = DeletelogHook();
  const {
    data: editNine,
    editSectionNine,
    loading: load,
  } = EditSectionNineHook();
  const {
    data: sectionTen,
    getSectionTen,
    loading: load1,
  } = GetSectionTenHook();
  const {
    data: editTen,
    editSectionTen,
    loading: load2,
    setLoading,
  } = EditSectionTenHook();

  const { data: blogs, getBlog, loading: load3 } = GetBlogHook();
  const { data: added, saveBlog, loading: load4 } = SaveBlogHook();

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
      navigate("/edit-blog/" + added._id);
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
      setLoading(true);
      const storageRef = storage.ref(`/tapera-jungle/${sectionTenFile?.name}`);
      const uploadTask = storageRef.put(sectionTenFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        async () => {
          try {
            const downloadURL = await storageRef.getDownloadURL();
            editSectionTen(sectionTen[0]._id, { image_one: downloadURL });
          } catch (error) {
            console.error("Error getting download URL:", error);
          }
        }
      );
    }
  }, [sectionTenFile]);

  useEffect(() => {
    if (sectionTenFile2) {
      setLoading(true);
      const storageRef = storage.ref(`/tapera-jungle/${sectionTenFile2?.name}`);
      const uploadTask = storageRef.put(sectionTenFile2);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        async () => {
          try {
            const downloadURL = await storageRef.getDownloadURL();
            editSectionTen(sectionTen[0]._id, { image_two: downloadURL });
          } catch (error) {
            console.error("Error getting download URL:", error);
          }
        }
      );

      // editSectionTen(sectionTen[0]._id, formData);
    }
  }, [sectionTenFile2]);

  useEffect(() => {
    getBlog();
  }, [added]);

  return (
    <LastSectionWrapper>
      {loading && <Loader />}
      {load && <Loader />}
      {load1 && <Loader />}
      {load2 && <Loader />}
      {load3 && <Loader />}
      {load4 && <Loader />}
      {loading7 && <Loader />}
      <MainContainer>
        <ImageWrapper>
          <label htmlFor="nine" style={{ width: "100%" }}>
            <img src={data && data[0]?.image} alt="" className="img-fluid" />
            <UploadImagedDiv>
              <UploadImage />
              <h2>
                Update Image <small>(Max height: 670px)</small>
              </h2>
            </UploadImagedDiv>
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
            <BuyBtn onClick={() => navigate("/mint-nft")}>
              Buy Tapera Jungle NFT
            </BuyBtn>
          </TextContainer>
        </ImageWrapper>
        <Wrapper>
          <MainRow>
            <MainCol lg={6}>
              <WrapperImg>
                <label htmlFor="ten" style={{ width: "100%" }}>
                  <img
                    className="img-fluid wrapperimg"
                    src={sectionTen && sectionTen[0]?.image_one}
                  />
                  <UploadImagedDiv>
                    <UploadImage />
                    <h2>
                      Update Image <small>(Max height: 600px)</small>
                    </h2>
                  </UploadImagedDiv>
                </label>
                <input
                  type="file"
                  style={{ display: "none" }}
                  name="ten"
                  id="ten"
                  onChange={(e) => setSectionTenFile(e.target.files[0])}
                />
              </WrapperImg>
            </MainCol>
            <MainCol lg={6}>
              <InnerContainer>
                <InnerContainerImg>
                  <label htmlFor="ten2" style={{ width: "100%" }}>
                    <img
                      className="img-fluid containerimg"
                      src={sectionTen && sectionTen[0]?.image_two}
                    />
                    <UploadImagedDiv>
                      <UploadImage />
                      <h2>
                        Update Image <small>(Max height: 412px)</small>
                      </h2>
                    </UploadImagedDiv>
                  </label>

                  <input
                    type="file"
                    style={{ display: "none" }}
                    name="ten2"
                    id="ten2"
                    onChange={(e) => setSectionTenFile2(e.target.files[0])}
                  />
                </InnerContainerImg>
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
            <AddCarouselImages
              onClick={() => {
                const data = {
                  heading: "deme headings",
                  content: "this is deme contents",
                  image_path: "",
                };
                saveBlog(data);
              }}
            >
              Add Blogs
            </AddCarouselImages>

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
                  <SwiperImgContainer>
                    <img
                      onClick={() => navigate("/edit-blog/" + item._id)}
                      key={item._id}
                      className="img-fluid swiperImg"
                      src={item.image}
                    />
                    <Tooltip title="Delete Image">
                      <DeleteBtn
                        onClick={() => {
                          deleteBlog(item._id, getBlog);
                        }}
                      />
                    </Tooltip>
                  </SwiperImgContainer>
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
