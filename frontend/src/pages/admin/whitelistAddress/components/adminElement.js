import styled from "styled-components";

export const AdminContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 9rem;
`;

export const FormContent = styled.div`
  padding: 2rem;
`;

export const AddButtonAddress = styled.button`
  text-align: center;
  margin: 1.2rem;

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s linear;
  }

`;

export const UploadCSVContainer = styled.div`
  width: 50%;
  margin: auto;
  padding: 1.2rem;
`;
