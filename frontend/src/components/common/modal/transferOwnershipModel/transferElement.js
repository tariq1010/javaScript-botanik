import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { Form, Input, Button } from "antd";

export const TransferMainModel = styled.div``;

export const TransferModelContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 400px;
  height: 300px;

  /* background: ${(p) =>
    p.theme.transferModelBg && p.theme.transferModelBg}; */
  background: #295f3f;

  border: "2px solid #000";
  text-align: center;
  border-radius: 30px 30px 30px 30px;
  @media (max-width: 420px) {
    width: 370px;
    height: 300px;
  }

  @media (max-width: 380px) {
    width: 330px;
    height: 300px;
  } ;
`;

export const TransferCenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
`;

export const Forms = styled(Form)``;

export const InputField = styled(Input)`
  border: none;
  padding: 0.5rem 4rem;
  color: black;
  border-radius: 20px;

  input[type="number"],
  input[type="password"],
  input[type="text"],
  textarea {
    padding-right: 1rem;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const TransferButton = styled.button`
  margin-top: 1.5rem;
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 20px;
  background: white;
  color: #295f3f;
  border: 0.5px solid #295f3f;
  box-shadow: 2px 0px 10px rgba(255, 249, 249, 0.15),
    0px 2px 10px rgba(255, 255, 255, 0.15);

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s linear;
  }
`;
