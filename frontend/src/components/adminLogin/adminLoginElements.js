import styled from "styled-components";

export const Content = styled.div`
  background-size: 100vw 100vh;
  background-repeat: no-repeat;

  @media (max-width: 991px) {
    background-size: 100vw 100vh;
    background-position: 0;
  }
  @media (max-width: 460px) {
    background-image: none;
  }
`;

export const LoginMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: 460px) {
    padding: 0 1rem;
  }
`;

export const LoginContainer = styled.div`
  height: 20rem;
  width: 25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  color: white;
  flex-direction: column;
  background-color: #DE4230;
`;

export const Heading = styled.h1`
  color: white;
  /* margin-top: 55px; */
`;

export const EmailInputField = styled.input`
  width: 18rem;
  height: 25px;
  border-radius: 20px;
  border: none;
  outline: none;
  margin-top: 10px;
  text-indent: 15px;
  color: black;
`;

export const PasswordInputField = styled.input`
  margin-top: 30px;
  border-radius: 20px;
  width: 18rem;
  height: 25px;
  border: none;
  outline: none;
  text-indent: 15px;
  color: black;
`;
export const LoginButton = styled.button`
  margin-top: 30px;
  height: 33px;
  width: 18rem;
  border-radius: 30px;
  border: none;
  outline: none;
  background: #2b2b2b;
  color: white;
  font-weight: 600;
  text-align: center;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;
