import styled from "styled-components";

export const MainFooterWrapper = styled.div`
  overflow: hidden;
  background-color: #003333;

  .container {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const LogoWrapper = styled.div`
  @media (max-width: 991.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;

  @media (max-width: 991.98px) {
    justify-content: center;
  }
`;

export const Links = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #eeefec;
  cursor: pointer;
  margin: 0;

  @media (max-width: 991.98px) {
    margin-top: 20px;
  }
`;

export const Copyrights = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #eeefec;
  text-align: end;

  @media (max-width: 991.98px) {
    text-align: center;
    margin-top: 20px;
  }
`;
