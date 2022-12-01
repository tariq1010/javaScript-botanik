import React from "react";
import { MainNav, MainNavbar } from "./navbarElement";
import { MainContainer } from "components/common";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LogoutHook } from "hooks/adminhooks";

const Navbar = () => {
  const { logout, logoutLoading } = LogoutHook();

  return (
    <div>
      <MainNavbar bg="light" expand="lg">
        <MainContainer>
          <MainNavbar.Toggle aria-controls="basic-navbar-nav" />
          <MainNavbar.Collapse id="basic-navbar-nav">
            <MainNav className="me-auto ms-auto">
              <MainNav.Link href="minted" as={Link} to="/minted">
                Minted
              </MainNav.Link>
              <MainNav.Link
                href="contract-functions"
                as={Link}
                to="/contract-functions"
              >
                Contract Function
              </MainNav.Link>

              <MainNav.Link href="upload-nft" as={Link} to="/upload-nft">
                upload NFTs
              </MainNav.Link>

              <MainNav.Link disabled={logoutLoading} onClick={() => logout()}>
                logout
              </MainNav.Link>
            </MainNav>
          </MainNavbar.Collapse>
        </MainContainer>
      </MainNavbar>
    </div>
  );
};

export default Navbar;
