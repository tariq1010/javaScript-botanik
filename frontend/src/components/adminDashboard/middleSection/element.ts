import styled from "styled-components";
import next from "../../../assets/images/next.png";
import back from "../../../assets/images/back.png";
import { AiOutlineUpload, AiFillDelete } from "react-icons/ai";

export const MiddleSectionWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 2rem;
`;

export const ImageWrapper = styled.div`
  margin-top: 5rem;
  position: relative;
  z-index: 10;

  @media (max-width: 991.98px) {
    margin-top: 0rem;
  }
`;

export const HeaderImageContainer = styled.div`
  position: relative;

  &:hover {
    opacity: 0.4;
  }

  .img-fluid {
    height: 631px;
    width: 100%;
    cursor: pointer;

    @media (max-width: 575.98px) {
      height: 400px;
    }
  }
`;
export const MainImageWrapper = styled.div`
  position: relative;

  &:hover {
    opacity: 0.4;
  }

  .mapImg {
    margin-top: 4rem;
    width: 100%;
    height: 550px;
    cursor: pointer;

    @media (max-width: 767.98px) {
      height: 100%;
      margin-top: 2rem;
    }
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 60%;
  left: 30%;

  @media (max-width: 1399.98px) {
    top: 65%;
    left: 10%;
  }

  @media (max-width: 1199.98px) {
    left: 2%;
  }

  @media (max-width: 991.98px) {
    left: 5%;
  }

  @media (max-width: 767.98px) {
    top: 60%;
    left: 0%;
  }

  @media (max-width: 575.98px) {
    top: 30%;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 26px;
  line-height: 44px;
  text-transform: uppercase;
  color: #eeefec;
  background-color: #000;
  margin: 0;
  margin-bottom: 5px;
  text-align: right;
  padding: 0px 10px;

  @media (max-width: 991.98px) {
    font-size: 18px;
  }

  @media (max-width: 767.98px) {
    text-align: center;
    line-height: 26px;
    padding: 10px;
  }

  @media (max-width: 575.98px) {
    font-size: 14px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 6rem;

  @media (max-width: 991.98px) {
    margin-top: 4rem;
  }
`;

export const MainTextContainer = styled.div`
  width: 65%;

  @media (max-width: 991.98px) {
    width: 100%;
    margin-top: 2rem;
  }

  @media (max-width: 575.98px) {
    margin-top: 1rem;
  }
`;

export const MainTextHeader = styled.h4`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 30px;
  text-transform: uppercase;
  color: #eeefec;
  background-color: #003333;
  padding: 10px 30px;

  @media (max-width: 991.98px) {
    text-align: center;

    br {
      display: none;
    }
  }
`;

export const MainTextNote = styled.p`
  margin-top: 4rem;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #090a00;
  text-align: justify;

  @media (max-width: 991.98px) {
    margin-top: 2rem;
    text-align-last: center;

    br {
      display: none;
    }
  }
`;

export const SwiperImgContainer = styled.div`
  position: relative;
  z-index: 10;
`;

export const SwiperContainer = styled.div`
  margin-top: 6rem;

  .swiperImg {
    height: 263px;
    width: 100%;
  }

  .btnWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
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

export const NextButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const PreviousButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const ImageContainer = styled.div`
  position: relative;

  .wrapperImg {
    height: 375px;
    cursor: pointer;
    position: relative;

    &:hover {
      opacity: 0.7;
    }

    @media (max-width: 991.98px) {
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    opacity: 0.4;
  }
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

  ${HeaderImageContainer}:hover & {
    visibility: visible;
    top: 40%;
  }
  ${ImageContainer}:hover & {
    visibility: visible;
    top: 50%;
    height: 70%;
    width: 70%;
  }
  ${MainImageWrapper}:hover & {
    visibility: visible;
    top: 50%;
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
  margin: 2rem 0 1rem auto;
  border: none;

  label {
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
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
