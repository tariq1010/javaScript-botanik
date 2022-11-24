import React from "react";
import { ComputerImageIcon, Content } from "./error404Elements";
import errorIcon from "../../assets/images/img.png";

const Error404 = () => {
  return (
    <Content>
      <ComputerImageIcon src={errorIcon} />
    </Content>
  );
};

export default Error404;
