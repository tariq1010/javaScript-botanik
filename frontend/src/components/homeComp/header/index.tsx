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
import headerbg from "../../../assets/images/headerbg.png";
import sectionimg1 from "../../../assets/images/sectionimg1.png";
import sectionimg2 from "../../../assets/images/sectionimg2.png";

function Header() {
  return (
    <HeaderWrapper>
      <MainContainer>
        <ImageWrapper>
          <img className="img-fluid" src={headerbg} />
        </ImageWrapper>
        <TextContainer>
          <p>
            The Tapera jungle project aims to preserve <br /> and give value to
            the Tapera forest <br /> in the Amazon, in the village of Urucara
          </p>
        </TextContainer>
        <BottomWrapper>
          <MainRow>
            <MainCol lg={6} className="d-flex justify-content-center">
              <WrapperContainer>
                <WrapperHeader>
                  This area has been protected by a group of local farmers since
                  2003
                </WrapperHeader>
                <WrapperText>
                  They have designated a few dozen plots of native forest so
                  that local residents can enjoy this natural space and the
                  forest's exuberance. <br /> <br /> But for several years now,
                  wood theft and illegal invasions have become more and more
                  frequent, and many producers have lost their land, which is
                  now occupied by illegal loggers or by ranchers who are
                  beginning to transform the forest into pasture for their
                  livestock.
                </WrapperText>
              </WrapperContainer>
            </MainCol>
            <MainCol lg={6}>
              <ImageContainer>
                <img
                  src={sectionimg1}
                  alt=""
                  className="img-fluid sectionImg"
                />
              </ImageContainer>
            </MainCol>
          </MainRow>
          <MainRow>
            <MainCol lg={6}>
              <SecondImageContainer>
                <img
                  src={sectionimg2}
                  alt=""
                  className="img-fluid sectionImg"
                />
              </SecondImageContainer>
            </MainCol>
            <MainCol lg={6} className="d-flex justify-content-center">
              <SecondWrapperText>
                The Tapera project is a private initiative of the Agro-Frut
                cooperative in Urucara and a group of botanical and nature
                enthusiasts, which aims to recover ownership of these lands,
                restore and protect them, while valuing this treasure of
                biodiversity, which has more than 100 species of trees. <br />
                Thus, several plots have already been bought from illegal
                sawmills, located in Sao Sebastiao, a village next to Urucara,
                where the majority of sawmills are located, all in an irregular
                situation.
              </SecondWrapperText>
            </MainCol>
          </MainRow>
        </BottomWrapper>

        <NumbersDiv>
          <MainRow>
            <MainCol lg={4}>
              <NumbersWrapper>
                <Numbers>2003</Numbers>
                <NumbersText>Protected by a group of local farmers</NumbersText>
              </NumbersWrapper>
            </MainCol>
            <MainCol lg={4}>
              <NumbersWrapper>
                <Numbers>8000</Numbers>
                <NumbersText>
                  Amazon trees in the original collection
                </NumbersText>
              </NumbersWrapper>
            </MainCol>
            <MainCol lg={4}>
              <NumbersWrapper>
                <Numbers>100</Numbers>
                <NumbersText>
                  or more unique species of trees located in Urucara
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
