import { NavbarWrapper, IconContainer, BlogBtn, BuyNFTbtn } from "./element";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MainCol, MainContainer } from "components/common";
import { Link } from "react-router-dom";
import mainlogo from "../../assets/images/mainlogo.png";

function NavbarCom() {
  return (
    <NavbarWrapper>
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
              <Link to="/blogs">
                <BlogBtn>Blogs</BlogBtn>
              </Link>
              <BuyNFTbtn>Buy TaperaJungle NTF</BuyNFTbtn>
            </IconContainer>
          </Navbar.Collapse>
        </MainContainer>
      </Navbar>
    </NavbarWrapper>
  );
}

export default NavbarCom;
