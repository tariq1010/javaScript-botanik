import { NavbarWrapper, IconContainer, BuyNFTbtn, LogoutBtn } from "./element";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Loader, MainContainer } from "components/common";
import mainlogo from "../../assets/images/logo2.png";
import { LogoutHook } from "hooks/adminhooks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import MintModal from "components/common/modal/mintModal";

function NavbarCom() {
  const { logout, loading } = LogoutHook();
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setshow] = useState(false);
  return (
    <NavbarWrapper>
      {loading && <Loader />}
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <MainContainer>
          <Navbar.Brand>
            <Link to="/">
              <img
                className="img-fluid"
                src={mainlogo}
                width={215}
                height={40}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <IconContainer>
              <BuyNFTbtn
                onClick={() => setshow(true)}
                //  onClick={() => navigate("/mint-nft")}
              >
                Buy Tapera Jungle NFT
              </BuyNFTbtn>
              <MintModal open={show} setShow={setshow} />
              {location.pathname.slice(0, 6) !== "/blogs" &&
                location.pathname !== "/" && (
                  <LogoutBtn
                    onClick={() => {
                      logout();
                    }}
                  >
                    Logout
                  </LogoutBtn>
                )}
            </IconContainer>
          </Navbar.Collapse>
        </MainContainer>
      </Navbar>
    </NavbarWrapper>
  );
}

export default NavbarCom;
