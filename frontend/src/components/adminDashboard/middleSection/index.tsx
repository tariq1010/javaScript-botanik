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
import { EditSectionFiveHook, GetSectionFiveHook } from "hooks/sectionFiveHook";
import { useEffect } from "react";
import { EditSectionSixHook, GetSectionSixHook } from "hooks/sectionSixHook";
import { GetSectionEightHook } from "hooks/sectionEightHook";
import { EditSectionSevenHook, GetSectionSevenHook } from "hooks/sectionSevenHook";
import { Swiper as SwiperCore } from "swiper/types";
import back from "../../../assets/images/back.png";
import next from "../../../assets/images/next.png";
import { useRef,useState } from "react";

function MiddleSection() {
  const sectionFiveText = useRef(null);
  const sectionSixText = useRef(null);
  const sectionSixHeading = useRef(null);



  const [sectionfiveFile, setSectionFiveFile] = useState(null);
  const [sectionsixFile, setSectionSixFile] = useState(null);
  const [sectionSevenFile, setSectionSevenFile] = useState(null);



  const swiperRef = useRef<SwiperCore>();

  const { data, loading, getSectionFive } = GetSectionFiveHook();
  const { data: sectionSix, getSectionSix } = GetSectionSixHook();
  const { data: carousel, getSectionEight } = GetSectionEightHook();
  const { data: sectionSeven, getSectionSeven } = GetSectionSevenHook();

  const { data: editedFive, editSectionFive } = EditSectionFiveHook();
  const { data: editedSix, editSectionSix } = EditSectionSixHook();
  const { data: editedSeven, editSectionSeven } = EditSectionSevenHook();


  useEffect(() => {
    getSectionEight();
  }, []);



  function handleSectionFive() {
    editSectionFive(data[0]._id, sectionFiveText.current.innerHTML);
  }
  function handleSectionSix() {
    const data={
      heading:sectionSixHeading.current.innerHTML,
      paragraph_one:sectionSixText.current.innerHTML,
    }
    editSectionSix(sectionSix[0]._id, data);
  }


  useEffect(() => {
    getSectionFive();
    setSectionFiveFile(null)

}, [editedFive]);
useEffect(() => {
  getSectionSix();
  setSectionSixFile(null)

}, [editedSix]);

useEffect(() => {
  getSectionSeven();
  setSectionSevenFile(null)

}, [editedSeven]);


  useEffect(() => {
    if(sectionfiveFile){
      editSectionFive(data[0]._id, sectionfiveFile);
    }
  }, [sectionfiveFile]);

  useEffect(() => {
    if(sectionsixFile){
      editSectionSix(sectionSix[0]._id, sectionsixFile);
    }
  }, [sectionsixFile]);


  useEffect(() => {
    if(sectionSevenFile){
      editSectionSeven(sectionSeven[0]._id, sectionSevenFile);
    }
  }, [sectionSevenFile]);



 





  return (
    <MiddleSectionWrapper >
      <MainContainer>
        <ImageWrapper>
        <label htmlFor="five" style={{ width: "100%" }}>
          <img className="img-fluid" src={data && data[0]?.image} alt="" />
          </label>
          <input
            type="file"
            style={{ display: "none" }}
            name="five"
            id="five"
            onChange={(e) => setSectionFiveFile(e.target.files[0])}
          />
          <TextContainer>
           {data &&<Text
            ref={sectionFiveText}
            contentEditable
            onBlur={handleSectionFive}
            dangerouslySetInnerHTML={{ __html: data[0]?.text }}
           />
}
          </TextContainer>
        </ImageWrapper>

        <Wrapper>
          <MainRow>
            <MainCol lg={6} className="d-flex justify-content-center">\
            <label htmlFor="six" style={{ width: "100%" }}>
              <img
                src={sectionSix && sectionSix[0]?.image}
                alt=""
                className="img-fluid wrapperImg"
              />
              </label>
              <input
            type="file"
            style={{ display: "none" }}
            name="six"
            id="six"
            onChange={(e) => setSectionSixFile(e.target.files[0])}
          />
            </MainCol>
            <MainCol lg={6} className="d-flex justify-content-center">
             <MainTextContainer>
             {sectionSix &&  <MainTextHeader
                ref={sectionSixHeading}
                contentEditable
                onBlur={handleSectionSix}
                dangerouslySetInnerHTML={{ __html: sectionSix[0]?.heading }}
               />}
                  
                  {  sectionSix 
                  && <MainTextNote
                 ref={sectionSixText}
                 contentEditable
                 onBlur={handleSectionSix}
                 dangerouslySetInnerHTML={{ __html: sectionSix[0]?.paragraph_one }}
                />
                  }
                 
              </MainTextContainer>
            </MainCol>
          </MainRow>
        </Wrapper>
        <label htmlFor="seven" style={{ width: "100%" }}>
        <img
          className="img-fluid mapImg"
          src={sectionSeven && sectionSeven[0]?.image}
        />
        </label>
        <input
            type="file"
            style={{ display: "none" }}
            name="seven"
            id="seven"
            onChange={(e) => setSectionSevenFile(e.target.files[0])}
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
