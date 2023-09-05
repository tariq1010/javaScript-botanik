import { Loader, MainCol, MainContainer, MainRow } from "components/common";
import {
  BottomWrapper,
  HeaderWrapper,
  ImageContainer,
  ImageWrapper,
  SecondImageContainer,
  TextContainer,
  WrapperContainer,
  WrapperHeader,
  WrapperText,
  SecondWrapperText,
  NumbersDiv,
  NumbersWrapper,
  Numbers,
  NumbersText,
  UploadImage,
  UploadImagedDiv,
} from "./element";
import { EditSectionOneHook, GetSectionOneHook } from "hooks/sectionOneHook";
import { useEffect, useState } from "react";
import { EditSectionTwoHook, GetSectionTwoHook } from "hooks/sectionTwoHook";
import {
  EditSectionThreeHook,
  GetSectionThreeHook,
} from "hooks/sectionThreeHook";
import { EditSectionFourHook, GetSectionFourHook } from "hooks/sectionFourHook";
import { useRef } from "react";

function Header() {
  const [sectionOneFile, setSectionOneFile] = useState(null);
  const [sectiontwoFile, setSectiontwoFile] = useState(null);
  const [sectionThreeFile, setSectionThreeFile] = useState(null);

  const sectionOneText = useRef(null);
  const sectiontwoText = useRef(null);
  const heading1 = useRef(null);
  const heading2 = useRef(null);
  const heading3 = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  const sectiontwoParagraph_one = useRef(null);
  const sectionThreeParagraph = useRef(null);

  const { data, getSectionOne, loading } = GetSectionOneHook();
  const { data: edited, editSectionOne, loading: load } = EditSectionOneHook();
  const {
    data: editedSectionTwo,
    editSectionTwo,
    loading: load1,
  } = EditSectionTwoHook();
  const {
    data: editedSectionThree,
    editSectionThree,
    loading: load2,
  } = EditSectionThreeHook();
  const {
    data: editedSectionFour,
    editSectionFour,
    loading: load3,
  } = EditSectionFourHook();

  const {
    data: sectionTwo,
    getSectionTwo,
    loading: load4,
  } = GetSectionTwoHook();
  const {
    data: sectionThree,
    getSectionThree,
    loading: load5,
  } = GetSectionThreeHook();
  const {
    data: sectionFour,
    getSectionFour,
    loading: load6,
  } = GetSectionFourHook();

  function handleSectionOne() {
    editSectionOne(data[0]._id, sectionOneText.current.innerHTML);
  }

  function handleSectionTwo() {
    const data = {
      heading: sectiontwoText.current.innerHTML,
      paragraph_one: sectiontwoParagraph_one.current.innerHTML,
    };
    editSectionTwo(sectionTwo[0]._id, data);
  }

  function handleSectionThree() {
    const data = {
      paragraph_one: sectionThreeParagraph.current.innerHTML,
    };
    editSectionThree(sectionThree[0]._id, data);
  }

  function handleSectionFour() {
    const data = {
      heading1: heading1.current.innerHTML,
      heading2: heading2.current.innerHTML,
      heading3: heading3.current.innerHTML,
      text1: text1.current.innerHTML,
      text2: text2.current.innerHTML,
      text3: text3.current.innerHTML,
    };
    editSectionFour(sectionFour[0]._id, data);
  }

  useEffect(() => {
    getSectionFour();
  }, [editedSectionFour]);

  useEffect(() => {
    getSectionOne();
    setSectionOneFile(null);
  }, [edited]);

  useEffect(() => {
    getSectionTwo();
    setSectiontwoFile(null);
  }, [editedSectionTwo]);

  useEffect(() => {
    getSectionThree();
    setSectionThreeFile(null);
  }, [editedSectionThree]);

  useEffect(() => {
    if (sectionOneFile) {
      editSectionOne(data[0]._id, sectionOneFile);
    }
  }, [sectionOneFile]);

  useEffect(() => {
    if (sectiontwoFile) {
      editSectionTwo(sectionTwo[0]._id, sectiontwoFile);
    }
  }, [sectiontwoFile]);

  useEffect(() => {
    if (sectionThreeFile) {
      editSectionThree(sectionThree[0]._id, sectionThreeFile);
    }
  }, [sectionThreeFile]);

  console.log(load, "load");

  return (
    <HeaderWrapper>
      {(loading ||
        load ||
        load1 ||
        load2 ||
        load3 ||
        load4 ||
        load5 ||
        load6) && <Loader />}
      {/* {load && <Loader />}
      {load1 && <Loader />}
      {load2 && <Loader />}
      {load3 && <Loader />}
      {load4 && <Loader />}
      {load5 && <Loader />}
      {load6 && <Loader />} */}

      <MainContainer>
        <ImageWrapper>
          <label htmlFor="sectionOneFile" style={{ width: "100%" }}>
            <img className="img-fluid" src={data && data[0]?.image} />
            <UploadImagedDiv>
              <UploadImage />
              <h2>
                Update Image <small>(Max Height: 550px)</small>
              </h2>
            </UploadImagedDiv>
          </label>
          <input
            type="file"
            style={{ display: "none" }}
            name="sectionOneFile"
            id="sectionOneFile"
            onChange={(e) => setSectionOneFile(e.target.files[0])}
          />
        </ImageWrapper>

        <TextContainer>
          {data && (
            <p
              dangerouslySetInnerHTML={{ __html: data[0]?.text }}
              ref={sectionOneText}
              contentEditable
              onBlur={handleSectionOne}
            ></p>
          )}
        </TextContainer>
        <BottomWrapper>
          <MainRow>
            <MainCol lg={6} className="d-flex justify-content-center">
              <WrapperContainer>
                <WrapperHeader
                  ref={sectiontwoText}
                  contentEditable
                  onBlur={handleSectionTwo}
                >
                  {sectionTwo && sectionTwo[0]?.heading}
                </WrapperHeader>
                {sectionTwo && (
                  <WrapperText
                    ref={sectiontwoParagraph_one}
                    contentEditable
                    onBlur={handleSectionTwo}
                    dangerouslySetInnerHTML={{
                      __html: sectionTwo[0]?.paragraph_one,
                    }}
                  ></WrapperText>
                )}
              </WrapperContainer>
            </MainCol>
            <MainCol lg={6}>
              <ImageContainer>
                <label
                  // htmlFor="two"
                  htmlFor="two"
                  style={{ width: "100%" }}
                >
                  <img
                    src={sectionTwo && sectionTwo[0]?.image}
                    alt=""
                    className="img-fluid sectionImg"
                  />
                  <UploadImagedDiv>
                    <UploadImage />
                    <h2>
                      Update Image <small>(Max Height: 375px)</small>
                    </h2>
                  </UploadImagedDiv>
                </label>

                <input
                  type="file"
                  style={{ display: "none" }}
                  name="two"
                  id="two"
                  onChange={(e) => setSectiontwoFile(e.target.files[0])}
                />
              </ImageContainer>
            </MainCol>
          </MainRow>
          <MainRow>
            <MainCol lg={6}>
              <SecondImageContainer>
                <label htmlFor="three" style={{ width: "100%" }}>
                  <img
                    src={sectionThree && sectionThree[0]?.image}
                    alt=""
                    className="img-fluid sectionImg"
                  />
                  <UploadImagedDiv>
                    <UploadImage />
                    <h2>
                      Update Image <small>(375px * 550px)</small>
                    </h2>
                  </UploadImagedDiv>
                </label>
                <input
                  type="file"
                  style={{ display: "none" }}
                  name="three"
                  id="three"
                  onChange={(e) => setSectionThreeFile(e.target.files[0])}
                />
              </SecondImageContainer>
            </MainCol>
            <MainCol lg={6} className="d-flex justify-content-center">
              {sectionThree && (
                <SecondWrapperText
                  ref={sectionThreeParagraph}
                  contentEditable
                  onBlur={handleSectionThree}
                  dangerouslySetInnerHTML={{
                    __html: sectionThree[0]?.paragraph_one,
                  }}
                />
              )}
            </MainCol>
          </MainRow>
        </BottomWrapper>

        <NumbersDiv>
          <MainRow>
            <MainCol lg={4}>
              {sectionFour && (
                <NumbersWrapper>
                  <Numbers
                    ref={heading1}
                    contentEditable
                    onBlur={handleSectionFour}
                    dangerouslySetInnerHTML={{
                      __html: sectionFour[0]?.heading1,
                    }}
                  />
                  <NumbersText
                    ref={text1}
                    contentEditable
                    onBlur={handleSectionFour}
                    dangerouslySetInnerHTML={{ __html: sectionFour[0]?.text1 }}
                  />
                </NumbersWrapper>
              )}
            </MainCol>
            <MainCol lg={4}>
              {sectionFour && (
                <NumbersWrapper>
                  <Numbers
                    ref={heading2}
                    contentEditable
                    onBlur={handleSectionFour}
                    dangerouslySetInnerHTML={{
                      __html: sectionFour[0]?.heading2,
                    }}
                  />
                  <NumbersText
                    ref={text2}
                    contentEditable
                    onBlur={handleSectionFour}
                    dangerouslySetInnerHTML={{ __html: sectionFour[0]?.text2 }}
                  />
                </NumbersWrapper>
              )}
            </MainCol>
            <MainCol lg={4}>
              {sectionFour && (
                <NumbersWrapper>
                  <Numbers
                    ref={heading3}
                    contentEditable
                    onBlur={handleSectionFour}
                    dangerouslySetInnerHTML={{
                      __html: sectionFour[0]?.heading3,
                    }}
                  />
                  <NumbersText
                    dangerouslySetInnerHTML={{ __html: sectionFour[0]?.text3 }}
                    ref={text3}
                    contentEditable
                    onBlur={handleSectionFour}
                  />
                </NumbersWrapper>
              )}
            </MainCol>
          </MainRow>
        </NumbersDiv>
      </MainContainer>
    </HeaderWrapper>
  );
}

export default Header;
