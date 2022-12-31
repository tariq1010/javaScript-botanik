import styled from "styled-components";
import next from "../../assets/images/next.png";
import back from "../../assets/images/back.png";
import { AiOutlineUpload, AiFillDelete } from "react-icons/ai";

export const BlogWrapper = styled.div`
  background-color: #fff;
  overflow: hidden;

  .mainContainer {
    margin-bottom: 4rem;
  }
`;

export const ImageWrapper = styled.div`
  .img-fluid {
    height: 270px;
    width: 400px;
    display: block;
    margin: 0 auto;

    @media (max-width: 991.98px) {
      height: 100%;
      width: 100%;
    }
  }
`;
export const EditImageWrapper = styled.div`
  position: relative;
  height: 270px;
  width: 400px;
  display: block;
  margin: 0 auto;
  &:hover {
    opacity: 0.4;
  }
  .img-fluid {
    height: 270px;
    width: 400px;
    display: block;
    margin: 0 auto;
    cursor: pointer;

    @media (max-width: 991.98px) {
      height: 100%;
      width: 100%;
    }
  }
`;

export const PostContainer = styled.div`
  margin-top: 4rem;

  @media (max-width: 991.98px) {
    margin-top: 2rem;
  }

  .postWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PostHeader = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 46px;
  text-transform: uppercase;
  color: #090a00;
  text-align: center;
  text-align-last: center;
  font-family: "Gotham", sans-serif !important;
  width: 100%;

  @media (max-width: 1199.98px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  @media (max-width: 575.98px) {
    font-size: 30px;
    text-align: justify;
    text-align-last: center;
  }
`;

export const PostTextFirst = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #003333;
  text-align: justify;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  @media (max-width: 1199.98px) {
    width: 100%;
    margin-left: 0;
  }
`;
export const PostTextSecond = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #003333;
  text-align: justify;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  width: 70%;

  @media (max-width: 1199.98px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const BlogSection = styled.div`
  margin-top: 4rem;

  @media (max-width: 991.98px) {
    margin-top: 2rem;
  }
`;

export const BlogHeader = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
  color: #003333;
  font-family: "Gotham", sans-serif !important;
`;

export const SwiperContainer = styled.div`
  margin-top: 2rem;

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

export const ImageContainer = styled.div`
  margin-top: 6rem;
  position: relative;

  @media (max-width: 991.98px) {
    margin-top: 1rem;
  }
  .img-fluid {
    width: 100%;
    height: 664px;
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

export const NextButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const PreviousButton = styled.button`
  background-color: transparent;
  border: none;
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

  ${EditImageWrapper}:hover & {
    visibility: visible;
    top: 50%;

    h2 {
      small {
        font-size: 16px;
        margin-left: 40px;
      }
    }
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
