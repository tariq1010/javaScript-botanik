import styled from "styled-components";
import { AiOutlineUpload } from "react-icons/ai";

export const HeaderWrapper = styled.div`
  overflow: hidden;
  margin-top: 1rem;
  margin-bottom: 5rem;
`;

export const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    opacity: 0.5;
  }

  .img-fluid {
    height: 550px;
    width: 100%;
    cursor: pointer;
    position: relative;
    z-index: 10;

    @media (max-width: 991.98px) {
      height: 100%;
    }
  }
`;

export const TextContainer = styled.div`
  background-color: #003333;
  width: 1000px;
  position: absolute;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(250px, -280px);

  @media (max-width: 1399.98px) {
    width: 900px;
    transform: translate(170px, -320px);
  }

  @media (max-width: 1199.98px) {
    width: 800px;
    transform: translate(50px, -320px);
  }

  @media (max-width: 991.98px) {
    width: 600px;
    transform: translate(50px, -140px);
  }

  @media (max-width: 767.98px) {
    width: 450px;
    transform: translate(50px, -150px);
  }

  @media (max-width: 550.98px) {
    width: 80%;
    transform: translate(30px, -150px);
  }

  @media (max-width: 430.98px) {
    transform: translate(30px, -150px);
  }
  @media (max-width: 410.98px) {
    transform: translate(30px, -120px);
  }

  @media (max-width: 395.98px) {
    transform: translate(30px, -140px);
  }

  p {
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 46px;
    text-transform: uppercase;
    color: #eeefec;
    font-family: "Gotham", sans-serif !important;
    text-align: right;
    padding: 50px 40px 20px 40px;

    @media (max-width: 1399.98px) {
      text-align: justify;
      text-align-last: center;

      br {
        display: none;
      }
    }
    @media (max-width: 991.98px) {
      font-size: 18px;
      padding: 10px 20px;
      line-height: 26px;
    }

    @media (max-width: 575.98px) {
      font-size: 14px;
      padding: 10px;
    }

    @media (max-width: 410.98px) {
      padding: 10px;
      line-height: 20px;
    }
  }
`;

export const BottomWrapper = styled.div`
  margin-top: 10rem;

  @media (max-width: 1199.98px) {
    margin-top: 5rem;
  }

  @media (max-width: 575.98px) {
    margin-top: 2rem;
  }
`;

export const WrapperContainer = styled.div`
  width: 75%;
  margin-top: 1rem;

  @media (max-width: 991.98px) {
    width: 100%;
  }
`;

export const WrapperHeader = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 30px;
  text-transform: uppercase;
  color: #090a00;
  font-family: "Gotham", sans-serif !important;

  @media (max-width: 991.98px) {
    text-align: center;
  }

  @media (max-width: 575.98px) {
    text-align: justify;
    text-align-last: center;
  }
`;

export const WrapperText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #090a00;
  text-align: justify;
  width: 95%;

  @media (max-width: 991.98px) {
    width: 100%;
    text-align: justify;
    text-align-last: center;
    margin-bottom: 2rem;

    br {
      display: none;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    opacity: 0.4;
  }

  .sectionImg {
    height: 375px;
    width: 90%;
    cursor: pointer;

    @media (max-width: 991.98px) {
      height: 100%;
      width: 100%;
    }
  }
`;
export const SecondImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  position: relative;

  &:hover {
    opacity: 0.4;
  }

  @media (max-width: 991.98px) {
    margin-top: 2rem;
  }

  .sectionImg {
    height: 375px;
    width: 550px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;

    @media (max-width: 991.98px) {
      height: 100%;
      width: 100%;
    }
  }
`;

export const SecondWrapperText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #090a00;
  text-align: justify;
  width: 80%;
  margin-top: 10rem;

  @media (max-width: 991.98px) {
    margin-top: 2rem;
    width: 100%;
    text-align-last: center;

    br {
      display: none;
    }
  }
`;

export const NumbersDiv = styled.div`
  background-color: #003333;
  min-height: 275px;
  margin-top: 10rem;

  @media (max-width: 991.98px) {
    margin-top: 4rem;
    padding-bottom: 30px;
  }
`;

export const Numbers = styled.h4`
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 68px;
  text-align: center;
  text-transform: uppercase;
  color: #eeefec;
  font-family: "Gotham", sans-serif !important;
`;

export const NumbersText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #eeefec;
  width: 60%;

  @media (max-width: 991.98px) {
    width: 100%;
  }
`;

export const NumbersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;
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
  }

  ${ImageContainer}:hover & {
    visibility: visible;
    height: 70%;
    width: 70%;

    top: 50%;
    left: 45%;
  }

  ${SecondImageContainer}:hover & {
    visibility: visible;
    top: 50%;
    left: 50%;
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
