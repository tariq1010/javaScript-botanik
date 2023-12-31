import { MainCol, MainContainer, MainRow } from "components/common";
import {
  Copyrights,
  Links,
  LinksWrapper,
  LogoWrapper,
  MainFooterWrapper,
} from "./element";
import footerlogo from "../../assets/images/footerlogo2.png";
import { Link } from "react-router-dom";

function MainFooter() {
  return (
    <MainFooterWrapper>
      <MainContainer>
        <MainRow>
          <MainCol lg={6}>
            <LogoWrapper>
              <img className="" src={footerlogo} />
            </LogoWrapper>
          </MainCol>
          <MainCol lg={6}>
            <LinksWrapper>
              <Links>Blog</Links>
              <Link to="/">
                <Links>Home</Links>
              </Link>
            </LinksWrapper>
          </MainCol>
        </MainRow>
        <Copyrights>
          Copyright © {new Date().getFullYear()} by Tapera Jungle project
        </Copyrights>
      </MainContainer>
    </MainFooterWrapper>
  );
}

export default MainFooter;
