import styled from "styled-components";

export const MintModalSection = styled.section`

`
export const BoxContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background: #003333;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 30px 30px;
`
export const HeaderSection = styled.div`
  padding-top: 2.5rem;
`;

export const Title = styled.h5`
  text-align: center;
  /* padding-top: 10rem; */
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
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

export const Text = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;

  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: capitalize;
    color: #FFFFFF;
  }
`;
export const ConnectButton = styled.button`
display: block;
margin-left: auto;
margin-right: auto;
margin-top: 1rem;
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
    color: #FFFFFF;
    cursor: pointer;
`

export const MintButton = styled.button`
display: block;
margin-left: auto;
margin-right: auto;
margin-top: 1rem;
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
    color: #FFFFFF;
`