import { MainCol, MainContainer, MainRow } from "components/common";
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
} from "./element";

function Header({
  data,
  sectionTwo,
  sectionThree,
  sectionFour,
  setLoading,
  imageLoad,
}) {
  return (
    <HeaderWrapper>
      <MainContainer>
        <ImageWrapper>
          <img
            className="img-fluid"
            alt={data && data[0]?.image}
            src={data && data[0]?.image}
            onLoad={() => setLoading(!imageLoad)}
          />
        </ImageWrapper>
        <TextContainer>
          {data && <p dangerouslySetInnerHTML={{ __html: data[0]?.text }}></p>}
        </TextContainer>
        <BottomWrapper>
          <MainRow>
            <MainCol lg={6} className="d-flex justify-content-center">
              <WrapperContainer>
                {sectionTwo && (
                  <WrapperHeader
                    dangerouslySetInnerHTML={{ __html: sectionTwo[0]?.heading }}
                  ></WrapperHeader>
                )}

                {sectionTwo && (
                  <WrapperText
                    dangerouslySetInnerHTML={{
                      __html: sectionTwo[0]?.paragraph_one,
                    }}
                  ></WrapperText>
                )}
              </WrapperContainer>
            </MainCol>
            <MainCol lg={6}>
              <ImageContainer>
                <img
                  className="img-fluid sectionImg"
                  alt={sectionTwo && sectionTwo[0]?.image}
                  src={sectionTwo && sectionTwo[0]?.image}
                />
              </ImageContainer>
            </MainCol>
          </MainRow>
          <MainRow>
            <MainCol lg={6}>
              <SecondImageContainer>
                <img
                  src={sectionThree && sectionThree[0]?.image}
                  alt=""
                  className="img-fluid sectionImg"
                />
              </SecondImageContainer>
            </MainCol>
            <MainCol lg={6} className="d-flex justify-content-center">
              {sectionThree && (
                <SecondWrapperText
                  dangerouslySetInnerHTML={{
                    __html: sectionThree[0]?.paragraph_one,
                  }}
                ></SecondWrapperText>
              )}
            </MainCol>
          </MainRow>
        </BottomWrapper>

        <NumbersDiv>
          <MainRow>
            <MainCol lg={4}>
              <NumbersWrapper>
                <Numbers>{sectionFour && sectionFour[0]?.heading1}</Numbers>
                <NumbersText>
                  {sectionFour && sectionFour[0]?.text1}
                </NumbersText>
              </NumbersWrapper>
            </MainCol>
            <MainCol lg={4}>
              <NumbersWrapper>
                <Numbers>{sectionFour && sectionFour[0]?.heading2}</Numbers>
                <NumbersText>
                  {sectionFour && sectionFour[0]?.text1}
                </NumbersText>
              </NumbersWrapper>
            </MainCol>
            <MainCol lg={4}>
              <NumbersWrapper>
                <Numbers>{sectionFour && sectionFour[0]?.heading3}</Numbers>
                <NumbersText>
                  {sectionFour && sectionFour[0]?.text1}
                </NumbersText>
              </NumbersWrapper>
            </MainCol>
          </MainRow>
        </NumbersDiv>
      </MainContainer>
    </HeaderWrapper>
  );
}

export default Header;
