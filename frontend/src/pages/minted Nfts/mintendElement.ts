import styled from "styled-components";
import { Card } from "react-bootstrap";
import img from "../../assets/images/bgimage.jpeg";
export const MintedNftWrapper = styled.div`

background-image: url(${img});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;

  .overlayBg {
    background-color: rgba(59, 107, 78, 0.8);
  }
`;
