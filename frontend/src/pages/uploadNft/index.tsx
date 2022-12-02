import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { UploadNftHook } from "hooks/uploadNftHooks";
import styled from "styled-components";
import { openNotification } from "components/common";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Backdrop from "../../components/backdrop/backdrop";
import MainNavbar from "components/navbar";
const UploadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-left: 45rem;
  color: white;
`;

const UploadNft = () => {
  const [files, setFiles] = useState<any>("");
  const { data, uploadHandle, loading } = UploadNftHook();
  const navigate = useNavigate();

  console.log("upload", data?.data?.message);

  const { web3, userBalance, contract, accounts } = useAppSelector(
    (state) => state.web3Connect
  );

  const handleChange = (e: any) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      let data: any = e.target.result;

      if (Array.isArray(JSON.parse(data))) {
        setFiles(e.target.result);
      } else {
        openNotification("Invalid File", "", "error");
      }
    };
  };
  const { botanikData } = useAppSelector((state) => state.model);

  useEffect(() => {
    if (files) {
      uploadHandle(files);
    }
  }, [files]);

  useEffect(() => {
    if (data) {
      openNotification(data.data.message, "", "success");
      setFiles("");
    }
  }, [data]);

  useEffect(() => {
    //auth && dispatch(resetcheckAuth()) && navigate("/contract-functions");
    if (accounts && botanikData?.owner) {
      (botanikData?.owner).toLowerCase() === accounts.toLowerCase() &&
        navigate("/upload-nft");
    } else {
      navigate("/admin-login");
    }
  }, [accounts, botanikData]);

  return (
    <>
      <Backdrop loading={loading} />
      <MainNavbar />
      <UploadWrapper>
        <Container>
          <Row>
            <Col>
              <input
                type="file"
                onChange={handleChange}
                accept="application/JSON"
              />
            </Col>
          </Row>
        </Container>
      </UploadWrapper>
    </>
  );
};

export default UploadNft;
