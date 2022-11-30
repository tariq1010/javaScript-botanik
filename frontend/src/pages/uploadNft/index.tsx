import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { UploadNftHook } from "hooks/uploadNftHooks";
import styled from "styled-components";

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
  const { result, uploadHandle } = UploadNftHook();

  const handleChange = (e: any) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setFiles(e.target.result);
    };
  };

  useEffect(() => {
    if (files) {
      uploadHandle(files);
    }
  }, [files]);

  useEffect(() => {
    if (result) {
      setFiles("");
    }
  }, [result]);

  return (
    <UploadWrapper>
      <Container>
        <Row>
          <Col>
            <input type="file" onChange={handleChange} />
          </Col>
        </Row>
      </Container>
    </UploadWrapper>
  );
};

export default UploadNft;
