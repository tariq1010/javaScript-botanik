import {
  NavbarWrapper,
  IconContainer,
  BlogBtn,
  BuyNFTbtn,
  LogoutBtn,
} from "./element";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Loader, MainCol, MainContainer } from "components/common";
import { Link } from "react-router-dom";
import mainlogo from "../../assets/images/mainlogo.png";
import { LogoutHook } from "hooks/adminhooks";


function NavbarCom() {
  const { logout } = LogoutHook();
  return (
    <NavbarWrapper>
      {/* {loading && <Loader />} */}
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <MainContainer>
          <Navbar.Brand>
            <Link to="/">
              <img className="img-fluid" src={mainlogo} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <IconContainer>
              <BuyNFTbtn>Buy Tapera Jungle NFT</BuyNFTbtn>
              <LogoutBtn
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </LogoutBtn>
            </IconContainer>
          </Navbar.Collapse>
        </MainContainer>
      </Navbar>
    </NavbarWrapper>
  );
}

export default NavbarCom;
