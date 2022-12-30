import { Loader, MainCol, MainContainer, MainRow } from "components/common";
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
import {
  AddSectionEightHook,
  DeleteSectionEightHook,
  EditSectionEightHook,
  GetSectionEightHook,
} from "hooks/sectionEightHook";
import {
  EditSectionSevenHook,
  GetSectionSevenHook,
} from "hooks/sectionSevenHook";
import { Swiper as SwiperCore } from "swiper/types";
import back from "../../../assets/images/back.png";
import next from "../../../assets/images/next.png";
import { useRef, useState } from "react";

function MiddleSection() {
  const sectionFiveText = useRef(null);
  const sectionSixText = useRef(null);
  const sectionSixHeading = useRef(null);

  const [sectionfiveFile, setSectionFiveFile] = useState(null);
  const [sectionsixFile, setSectionSixFile] = useState(null);
  const [sectionSevenFile, setSectionSevenFile] = useState(null);
  const [sectionEightFile, setSectionEightFile] = useState(null);
  const [editEightFile, setEditEightFile] = useState(null);
  const [eightId, setEightId] = useState(null);
  const [show, setShow] = useState(false);

  const swiperRef = useRef<SwiperCore>();
  
  const { data, loading, getSectionFive } = GetSectionFiveHook();
  const { data:deleted, loading:load7, deleteSectionEight } = DeleteSectionEightHook();
  const { data: sectionSix, getSectionSix,loading:load } = GetSectionSixHook();
  const { data: carousel, getSectionEight ,loading:load1} = GetSectionEightHook();
  const { data: sectionSeven, getSectionSeven } = GetSectionSevenHook();

  const { data: editedFive, editSectionFive,loading:load2 } = EditSectionFiveHook();
  const { data: editedSix, editSectionSix ,loading:load3} = EditSectionSixHook();
  const { data: editedSeven, editSectionSeven,loading:load4 } = EditSectionSevenHook();
  const { data: addEight, addSectionEight,loading:load5 } = AddSectionEightHook();
  const { data: editedEight, editSectionEight,loading:load6 } = EditSectionEightHook();

  function handleSectionFive() {
    editSectionFive(data[0]._id, sectionFiveText.current.innerHTML);
  }
  function handleSectionSix() {
    const data = {
      heading: sectionSixHeading.current.innerHTML,
      paragraph_one: sectionSixText.current.innerHTML,
    };
    editSectionSix(sectionSix[0]._id, data);
  }

  useEffect(() => {
    getSectionEight();
    setSectionEightFile(null);
    setEightId(null)
  }, [addEight, editedEight,deleted]);

  useEffect(() => {
    getSectionFive();
    setSectionFiveFile(null);
  }, [editedFive]);
  useEffect(() => {
    getSectionSix();
    setSectionSixFile(null);
  }, [editedSix]);

  useEffect(() => {
    getSectionSeven();
    setSectionSevenFile(null);
  }, [editedSeven]);

  useEffect(() => {
    if (sectionfiveFile) {
      editSectionFive(data[0]._id, sectionfiveFile);
    }
  }, [sectionfiveFile]);

  useEffect(() => {
    if (sectionsixFile) {
      editSectionSix(sectionSix[0]._id, sectionsixFile);
    }
  }, [sectionsixFile]);

  useEffect(() => {
    if (sectionSevenFile) {
      editSectionSeven(sectionSeven[0]._id, sectionSevenFile);
    }
  }, [sectionSevenFile]);

  useEffect(() => {
    if (sectionEightFile) {
      addSectionEight(sectionEightFile);
    }
  }, [sectionEightFile]);


  useEffect(() => {
    if (editEightFile) {
      editSectionEight(eightId,editEightFile);
    }
  }, [editEightFile]);

  return (
    <MiddleSectionWrapper>
      {loading && <Loader/>}
      {load && <Loader/>}
      {load1 && <Loader/>}
      {load2 && <Loader/>}
      {load3 && <Loader/>}
      {load4 && <Loader/>}
      {load5 && <Loader/>}
      {load6 && <Loader/>}
      {load7 && <Loader/>}
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
            {data && (
              <Text
                ref={sectionFiveText}
                contentEditable
                onBlur={handleSectionFive}
                dangerouslySetInnerHTML={{ __html: data[0]?.text }}
              />
            )}
          </TextContainer>
        </ImageWrapper>

        <Wrapper>
          <MainRow>
            <MainCol lg={6} className="d-flex justify-content-center">
              
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
                {sectionSix && (
                  <MainTextHeader
                    ref={sectionSixHeading}
                    contentEditable
                    onBlur={handleSectionSix}
                    dangerouslySetInnerHTML={{ __html: sectionSix[0]?.heading }}
                  />
                )}

                {sectionSix && (
                  <MainTextNote
                    ref={sectionSixText}
                    contentEditable
                    onBlur={handleSectionSix}
                    dangerouslySetInnerHTML={{
                      __html: sectionSix[0]?.paragraph_one,
                    }}
                  />
                )}
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

        <SwiperContainer style={{ position: "relative" }}>
          <label
            htmlFor="eight"
            style={{
              background: "#FEE123",
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
          </label>
          <input
            type="file"
            style={{ display: "none" }}
            name="eight"
            id="eight"
            onChange={(e) => setSectionEightFile(e.target.files[0])}
          />
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
                <label htmlFor="editEight" style={{ width: "100%" }}>
                <img
                onClick={()=>{
                  setEightId(item._id)
                }}
               
                onMouseOut={()=>setShow(false)}
                key={item._id}
                className="img-fluid swiperImg"
                src={item.image}
              />
              <button
            style={{border:"none", padding:"5px 20px",background:"black",color:"white", fontSize:"12px",margin:"5px"}}
            onClick={()=>{
              deleteSectionEight(item._id)
           }}>Delete</button>
           

                </label>
                <input
            type="file"
            style={{ display: "none" }}
            name="editEight"
            id="editEight"
            onChange={(e) => setEditEightFile(e.target.files[0])}
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
