import styled from "styled-components";
import next from "../../../assets/images/next.png";
import back from "../../../assets/images/back.png";
import { AiOutlineUpload, AiFillDelete } from "react-icons/ai";

export const LastSectionWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 2rem;
`;

export const ImageWrapper = styled.div`
  margin-top: 6rem;
  position: relative;

  &:hover {
    opacity: 0.4;
  }

  @media (max-width: 991.98px) {
    margin-top: 1rem;
  }
  .img-fluid {
    width: 100%;
    height: 664px;
    cursor: pointer;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  z-index: 999;
  width: 907px;
  min-height: 448px;
  background-color: #003333;
  top: 15%;
  left: 15%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1399.98px) {
    left: 10%;
  }

  @media (max-width: 1199.98px) {
    left: 5%;
    width: 800px;
  }

  @media (max-width: 991.98px) {
    width: 600px;
  }

  @media (max-width: 767.98px) {
    width: 450px;
  }

  @media (max-width: 550.98px) {
    width: 380px;
    left: 8%;
    top: 10%;
  }
  @media (max-width: 450.98px) {
    left: 2%;
  }
  @media (max-width: 420.98px) {
    left: 3.5%;
    width: 350px;
  }
  @media (max-width: 391.98px) {
    left: 2.5%;
    width: 330px;
  }
  @media (max-width: 375.98px) {
    left: 2.5%;
    width: 310px;
  }
`;

export const HeaderText = styled.h4`
  width: 95%;
  text-align: center;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 40px;
  text-transform: uppercase;
  color: #eeefec;
  font-family: "Gotham", sans-serif !important;

  @media (max-width: 991.98px) {
    width: 100%;
    font-size: 24px;
    line-height: 30px;
    text-align: justify;
    text-align-last: center;
    br {
      display: none;
    }
  }
`;

export const TextNote = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #eeefec;
  width: 95%;
  text-align: center;
  margin-top: 1rem;

  @media (max-width: 991.98px) {
    width: 100%;
    br {
      display: none;
    }
  }
`;

export const BuyBtn = styled.button`
  background: #d3e5d1;
  border-radius: 30px;
  border: none;
  padding: 6px 10px 6px 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #090a00;
  width: 230px;
  height: 42px;
  margin-top: 2rem;
`;

export const WrapperImg = styled.div`
  position: relative;

  &:hover {
    opacity: 0.4;
  }
  .wrapperimg {
    height: 602px;
    width: 100%;
    cursor: pointer;

    @media (max-width: 767.98px) {
      height: 100%;
    }
  }
`;

export const Wrapper = styled.div`
  margin-top: 6rem;

  @media (max-width: 991.98px) {
    margin-top: 2rem;
  }
`;

export const InnerContainerImg = styled.div`
  position: relative;

  &:hover {
    opacity: 0.4;
  }

  .containerimg {
    width: 100%;
    height: 412px;
    cursor: pointer;

    @media (max-width: 991.98px) {
      margin-top: 1rem;
    }

    @media (max-width: 767.98px) {
      height: 100%;
    }
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerText = styled.div`
  background-color: #003333;
  margin-top: 1rem;
  padding: 10px 20px;
  min-height: 175px;

  @media (max-width: 767.98px) {
    padding: 10px;
  }

  p {
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 30px;
    text-transform: uppercase;
    color: #eeefec;
    font-family: "Gotham", sans-serif !important;
    margin-top: 25px;

    @media (max-width: 767.98px) {
      text-align: justify;
      text-align: center;
    }
  }
`;

export const BlogSection = styled.div`
  margin-top: 6rem;

  @media (max-width: 991.98px) {
    margin-top: 2rem;
  }
`;

export const BlogHeader = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
  color: #090a00;
`;

export const SwiperContainer = styled.div`
  margin-top: 6rem;

  @media (max-width: 991.98px) {
    margin-top: 2rem;
  }

  .btnWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  .swiperImg {
    height: 270px;
    width: 100%;
    cursor: pointer;
  }

  .swiper-button-next {
    background-image: url(${next});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transition: 0.3s all ease-in-out;

    &:hover {
      scale: 1.2;
      transition: 0.3s all ease-in-out;
    }
  }
  .swiper-button-next::after {
    content: "";
  }

  .swiper-button-prev {
    background-image: url(${back});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transition: 0.3s all ease-in-out;

    &:hover {
      scale: 1.2;
      transition: 0.3s all ease-in-out;
    }
  }
  .swiper-button-prev::after {
    content: "";
  }
`;

export const SeeAllBtn = styled.button`
  background: #d3e5d1;
  border-radius: 30px;
  height: 46px;
  width: 142px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #090a00;
  display: block;
  margin: 2rem auto 0 auto;
  border: none;
`;

export const NextButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const PreviousButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const SwiperHeader = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 28px;
  color: #003333;
  font-family: "Gotham", sans-serif !important;
  margin-top: 10px;
`;

export const SwiperText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #003333;
  width: 90%;
`;

export const DeleteBtn = styled(AiFillDelete)`
  color: #ff597b;
  font-size: 24px;
  position: absolute;
  top: 12px;
  right: 16px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;

  &:hover {
    scale: 1.3;
    transition: 0.3s all ease-in-out;
  }
`;

export const AddCarouselImages = styled.button`
  background: #d3e5d1;
  border-radius: 4px;
  height: 46px;
  width: 182px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #090a00;
  display: block;
  border: none;
  margin: 0 0 1rem auto;

  label {
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export const SwiperImgContainer = styled.div`
  position: relative;
  z-index: 10;
`;

export const UploadImagedDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 9999;
  height: 50%;
  width: 50%;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
  cursor: pointer;

  ${ImageWrapper}:hover & {
    visibility: visible;
    top: 8%;
  }

  ${WrapperImg}:hover & {
    visibility: visible;
    top: 50%;
    height: 70%;
    width: 70%;
  }
  ${InnerContainerImg}:hover & {
    visibility: visible;
    top: 50%;
    height: 70%;
    width: 70%;
  }

  h2 {
    color: #fff;
    font-weight: 700;
    font-size: 30px;

    small {
      font-size: 16px;
    }
  }
`;

export const UploadImage = styled(AiOutlineUpload)`
  font-size: 60px;
  color: #fff;
`;

export const Buttoncontainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 1rem;
`;

export const ImgResolution = styled.p`
  font-size: 14px;
  margin: 0;
`;
