import styled from "styled-components";

export const NFTGalleryWrapper = styled.div`
  overflow: hidden;
  background: #fffffe;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .top-content {
    flex: 1;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 3rem;
  padding-bottom: 4rem;

  @media (max-width: 991.98px) {
    margin-top: 1rem;
    padding-bottom: 2rem;
  }
`;

export const NftDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 15px;

  @media (max-width: 991.98px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 767.98px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 500.98px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 320.98px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .image-container {
    position: relative;
    margin-top: 1rem;
  }

  svg {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 18px;
    color: #fff;
    background-color: #5ea624;
    padding: 2px;
    font-weight: 900;
    z-index: 10;
  }

  img {
    width: 100%;
    height: 233px;
    cursor: pointer;
    transition: filter 0.3s ease-in-out;
  }

  .darken {
    transition: filter 0.3s ease-in-out;
    filter: brightness(40%);
  }
`;

export const MintBtn = styled.button`
  min-width: 175px;
  min-height: 46px;
  padding: 6px 10px;
  border-radius: 30px;
  background: #fff;
  box-shadow: -4px 5px 28px 0px #000;
  color: #5ea624;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 100% */
  border: none;
  position: fixed;
  bottom: 1rem;
  right: 3rem;
`;
