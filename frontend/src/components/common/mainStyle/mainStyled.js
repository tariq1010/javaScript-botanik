import styled, { css } from "styled-components";
import { Row, Col, Container, Form } from "react-bootstrap";
import { Upload, Button } from "antd";

export const MainContainer = styled(Container)``;
export const MainRow = styled(Row)``;
export const MainCol = styled(Col)``;

export const MainUpload = styled(Upload)`
  display: flex;
  justify-content: center;
`;
export const MainUploadBtn = styled(Button)`
  &:hover {
    background: #f2f2f2;
    opacity: 0.8 !important;
  }
`;

export const NftForms = styled(Form)``;

export const ConnectBtnImg = styled.img`
  margin-top: 1rem;
  max-width: 100%;

  cursor: pointer;
  ${(props) =>
    props.contractConnectBtn &&
    css`
      display: flex;
      margin-left: auto;
      margin-right: auto;
      margin-top: 20rem !important;
    `}

  &:hover {
    transform: scaleX(1.09);
    transition: all 0.5s linear;
  }
`;
