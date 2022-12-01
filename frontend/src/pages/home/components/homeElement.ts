import { style } from "@mui/system";
import styled, { css } from "styled-components";
import wirefram from "../../../assets/images/Wireframe.png";
import img3 from "../../../assets/images/img3.png";
import img4 from '../../../assets/images/img4.svg'
import arrow from '../../../assets/images/Arrow.svg'
import nextArrow from '../../../assets/images/nextArrow.svg'
import prevArrow from '../../../assets/images/prevArrow.svg'


interface Props {
  battleDesc?: boolean;
  incrementBtn?: boolean;
  decrementBtn?: boolean;
  isRevealMain?: boolean;
}

export const LogoTitle = styled.img`
  color: white;
  font-size: 4rem;
  margin-bottom: 2rem;
`;

export const LogoDesc = styled.h2<Props>`
  color: white;
  ${(props) =>
    props.battleDesc &&
    css`
      margin-top: 8rem;
    `}
`;

export const MainWrapper = styled.div<Props>`
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
  justify-content: space-between;
  width: 11rem;
  height: 2.5rem;
  border-radius: 10px;
`;

export const CounterBtn = styled.button<Props>`
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
/* home section start */

export const Title = styled.h5`
  text-align: center;
  /* margin-top: -1rem; */
  padding-top: 10rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 120% */

  color: #ffffff;
`;

export const InputField = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  input {
    width: 442px;
    height: 42px;
    background: rgba(255, 255, 255, 0.85);
    border: 0.5px solid #295f3f;
    border-radius: 15px;
    padding-left: 1rem;
  }

  /* input::placeholder
{
  padding-left: 1rem;
} */

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
    /* identical to box height */

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
  /* identical to box height, or 120% */

  color: #ffffff;

  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height, or 120% */

    text-transform: capitalize;

    color: #ffffff;
  }
`;

export const HeroSection = styled.div`
  /* position: relative; */

  background-image: url(${wirefram});
  background-repeat: no-repeat;
  background-size: cover;
  /* background-image: url(${img3}); */

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
 /* background-image: url(${img4}); */
 background-image: url(${img4});
 -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
   background-repeat: no-repeat;
  /* transform: matrix(1, 0.08, -0.09, 1, 0, 0); */
   
 
   
`;

export const JungleTitle = styled.h5`
  font-family: "Noto Serif";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 24px;
  /* identical to box height, or 60% */

  color: white;
`;

export const JungleDescription = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */
padding-top: 1rem;
  text-align: justify;
  color: white;
  width: 100%;
`;


export const GallerySection = styled.section`

background: #295F3F;
padding-top: 3rem;
padding-bottom: 2rem;

`
export const GalleryTitle = styled.h5`

text-align: center;
font-family: 'Noto Serif';
font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 54px;

color: #FFFFFF;

`

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
  box-shadow: 0 15px 50px rgba(0,0,0,0.2);
  filter: blur(4px);
}

.swiper-slide-active
{
  filter: blur(0px);
}

.swiper-slide img {
  display: block;
  width: 100%;
}

.swiper-3d .swiper-slide-shadow-left
{
  background-image: none;
}

.swiper-3d .swiper-slide-shadow-right
{
  background-image: none;
}

.swiper-button-next
{
    /* color:black ;
    right:0 ;
    width:4rem ;
    top:60% ; */
    background-image:url(${nextArrow}) ;
    margin-right: 10rem;
    background-repeat: no-repeat !important;
    width: 4rem;
    /* width: 100% !important;
    background-repeat: no-repeat !important; */
    /* background-position: center ;
    background-size: cover; */

    &::after
    {
        display:none ;
    }
}

.swiper-button-prev
{
    color:black ;
    
    /* width:2rem ; */
  
    background-image:url(${prevArrow}) ;
    margin-left: 10rem;
    background-repeat: no-repeat !important;
    width: 100% !important;

    &::after
    {
        display:none ;
    }
}

.swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction
{
  display: none;
}

`

export const ContactSection = styled.div`
text-align: center;
padding-top: 15rem;
/* clip-path: polygon(0 65%, 100% 0%, 100% 100%, 0% 100%); */
clip-path: polygon(0 65%, 100% 13%, 100% 100%, 0% 100%);
background: #3B6B4E;
`
export const ContactTitle = styled.h5`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 24px;
/* identical to box height, or 150% */


color: #FFFFFF;
`

export const ContactButton = styled.div`

text-align: center;
padding-top: .5rem;
padding-bottom: 5rem;
button 
{
  background: #FFFFFF;
border: 0.5px solid #295F3F;
box-shadow: 2px 0px 10px rgba(255, 249, 249, 0.15), 0px 2px 10px rgba(255, 255, 255, 0.15);
border-radius: 10px;
padding: 8px 20px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height */

text-align: center;
text-transform: capitalize;

color: #295F3F;

}

`

export const FooterText = styled.p`
text-align: end;
padding-right: 8rem;
padding-top: 3rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


color: #FFFFFF;
`
