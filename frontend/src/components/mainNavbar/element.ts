import styled from "styled-components";

export const NavbarWrapper = styled.div`
  .bg-light {
    padding: 20px 0px;
    background-color: #fff !important;
  }

  .navbar-light .navbar-toggler {
    background-color: #003333 !important;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 991.98px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }
`;

export const BlogBtn = styled.button`
  border: none;
  background-color: #fff;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #003333;
`;

export const BuyNFTbtn = styled.button`
  width: 230px;
  height: 46px;
  background: #003333;
  border-radius: 30px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #eeefec;
  border: none;
`;
