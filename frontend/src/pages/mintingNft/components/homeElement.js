import { style } from "@mui/system";
import styled, { css } from "styled-components";
// import wirefram from "../../../assets/images/Wireframe.png";
// import aboutimg from "../../../assets/images/about.svg";
// import nextArrow from "../../../assets/images/nextArrow.svg";
// import prevArrow from "../../../assets/images/prevArrow.svg";

export const LogoTitle = styled.img`
  color: white;
  font-size: 4rem;
  margin-bottom: 2rem;
`;

export const LogoDesc = styled.h2`
  color: white;
  ${(props) =>
    props.battleDesc &&
    css`
      margin-top: 8rem;
    `}
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  ${(props) =>
    props.isRevealMain &&
    css`
      height: 60vh;
    `}
`;

export const MainCounter = styled.div`
  display: flex;
  background: white;
  /* justify-content: space-between; */
  width: 11rem;
  height: 2.5rem;
  border-radius: 10px;
  input {
    width: 2rem;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const CounterBtn = styled.button`
  padding: 0rem 0.8rem;
  border: none;
  font-size: 1.5rem;

  ${(props) =>
    props.incrementBtn &&
    css`
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    `}

  ${(props) =>
    props.decrementBtn &&
    css`
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    `}
`;
export const CounterValue = styled.h5`
  margin-top: 0.5rem;
`;
/* hero section start */

export const Title = styled.h5`
  text-align: center;
  padding-top: 10rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

export const InputField = styled.div`
  display: flex;
  justify-content: center;

  text-align: center;
  margin-top: 1.5rem;
  input {
    width: 100%;
    background: rgba(255, 255, 255, 0.85);
    border: none;
    text-align: center;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }

  input[type="number"],
  input[type="password"],
  input[type="text"],
  textarea {
    padding-right: 1rem;
  }
`;

export const Button = styled.div`
  text-align: center;
  margin-top: 1.5rem;

  button {
    background: #295f3f;
    box-shadow: 2px 0px 10px rgba(255, 255, 255, 0.15),
      0px 2px 10px rgba(255, 252, 252, 0.15);
    border-radius: 10px;
    border: none;
    padding: 10px 25px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    text-transform: capitalize;
    color: #ffffff;
  }
`;

export const Text = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;

  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: capitalize;
    color: #ffffff;
  }
`;

export const HeroSection = styled.div`
  /* position: relative; */

  /* background-image: url(); */
  background-repeat: no-repeat;
  background-size: cover;

  .mainImage img {
    width: 100%;
    height: 305px;
  }
`;

export const HeaderSection = styled.div`
  padding-bottom: 2.5rem;
  margin-top: -15rem;
`;

export const JungleSection = styled.div`
  padding-top: 13rem;
  padding-bottom: 5rem;
  /* background-image: url(); */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const JungleTitle = styled.h5`
  font-family: "Noto Serif";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 24px;
  text-align: center;
  /* identical to box height, or 60% */

  color: white;
`;

export const JungleDescription = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  /* or 150% */
  padding-top: 1rem;
  text-align: justify;
  color: white;
  width: 100%;
`;

export const GallerySection = styled.section`
  background: #295f3f;
  padding-top: 3rem;
  padding-bottom: 2rem;
`;
export const GalleryTitle = styled.h5`
  text-align: center;
  font-family: "Noto Serif";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 54px;

  color: #ffffff;
`;

export const GallerySwiper = styled.div`
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    /* height: 300px; */
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
    filter: blur(4px);
  }

  .swiper-slide-active {
    filter: blur(0px);
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }

  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }

  .swiper-3d .swiper-slide-shadow-right {
    background-image: none;
  }

  .swiper-button-next {
    /* background-image: url(); */
    margin-right: 10rem;
    background-repeat: no-repeat !important;
    width: 4rem;

    &::after {
      display: none;
    }

    @media (max-width: 1660px) {
      margin-right: -2px;
    }

    @media (max-width: 1480px) {
      margin-right: 0;
    }

    @media (max-width: 756px) {
      display: none;
    }
  }

  .swiper-button-prev {
    color: black;
    /* background-image: url(); */
    margin-left: 10rem;
    background-repeat: no-repeat !important;
    width: 100% !important;

    &::after {
      display: none;
    }

    @media (max-width: 1660px) {
      margin-left: -2px;
    }

    @media (max-width: 1480px) {
      margin-left: 0;
    }

    @media (max-width: 756px) {
      display: none;
    }
  }

  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    display: none;
  }
`;

export const ContactSection = styled.div`
  text-align: center;
  padding-top: 15rem;
  /* clip-path: polygon(0 65%, 100% 0%, 100% 100%, 0% 100%); */
  clip-path: polygon(0 65%, 100% 13%, 100% 100%, 0% 100%);
  background: #3b6b4e;
`;
export const ContactTitle = styled.h5`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 150% */

  color: #ffffff;
`;

export const ContactButton = styled.div`
  text-align: center;
  padding-top: 0.5rem;
  padding-bottom: 5rem;
  button {
    background: #ffffff;
    border: 0.5px solid #295f3f;
    box-shadow: 2px 0px 10px rgba(255, 249, 249, 0.15),
      0px 2px 10px rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    padding: 8px 20px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    text-align: center;
    text-transform: capitalize;

    color: #295f3f;
  }
`;

export const FooterText = styled.p`
  text-align: end;
  padding-right: 8rem;
  padding-top: 3rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  color: #ffffff;

  @media (max-width: 990px) {
    text-align: center;
    padding-right: 0;
  }
`;
