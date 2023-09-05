import styled from "styled-components";

import { Navbar, Nav } from "react-bootstrap";

export const MainNavbar = styled(Navbar)`
background:#295F3F !important ;
  /* background: #df6b6b !important; */
  /* background: #b42221 !important; */
  /* background: rgba(180, 34, 33, 0.7) !important; */
`;

export const MainNav = styled(Nav)`
  color: white !important;

  & > .nav-link {
    color: white !important;
    padding: 0.6rem 2.5rem !important;
  }
  cursor: pointer;

  & > .nav-link:hover {
    transform: scale(1.2);
    transition: all 0.3s linear;
  }

  @media (max-width: 991px) {
    & > .nav-link {
      margin-left: auto;
      margin-right: auto;
      margin-top: 1rem;
    }
  }
`;
