import { style } from "@mui/system";
import styled, { css } from "styled-components";


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

export const HomeSection = styled.div`

.img1
{
   width: 100%;
   height: 305px;
}

`

export const Title = styled.h5`

text-align: center;

`

export const InputField = styled.div`
text-align: center;

 input
{
  width: 442px;
height: 42px;
  background: rgba(255, 255, 255, 0.85);
border: 0.5px solid #295F3F;
border-radius: 15px;

}

.input:focus
{
  border:none;
  border-color:black;
}


`
