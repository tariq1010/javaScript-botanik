import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { UploadNftHook } from "hooks/uploadNftHooks";
import styled from "styled-components";
import { openNotification } from "components/common";
import img from "../../assets/images/bgimage.jpeg";
import upload from "../../assets/images/upload.png";
import { FaUpload } from "react-icons/fa";

import MainNavbar from "components/navbar";
const UploadSection = styled.div`
  background-image: url(${img});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;

  .overlayBg {
    background-color: rgba(59, 107, 78, 0.8);
  }
`;
const UploadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-left: 48rem;
  color: white;
`;

const Button = styled.div`
  button {
    background-color: #295f3f;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 10px;
    color: white;
    width: 200px;
    margin-top: 40px;
    margin-left: 50px;
    cursor: pointer;
    border-radius: 30px;
    border: 0.5px solid #295f3f;
    box-shadow: 2px 0px 10px rgba(255, 249, 249, 0.15),
      0px 2px 10px rgba(255, 255, 255, 0.15);
    transition: all 0.5s;
  }
`;

const UploadNft = () => {
  const [files, setFiles] = useState<any>("");
  const { data, uploadHandle } = UploadNftHook();

  console.log("upload", data?.data?.message);

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
    if (data) {
      openNotification(data.data.message, "", "success");
      setFiles("");
    }
  }, [data]);
  
  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <MainNavbar />

      <UploadSection>
        <div className="overlayBg">
          <UploadWrapper>
            <Container>
              <Row>
                {/* <Col>
              <input type="file" onChange={handleChange} accept="*json" />
            </Col> */}

                <Button>
                  <Col>
                    <button onClick={handleClick}>
                      <input
                        type="file"
                        hidden
                        ref={hiddenFileInput}
                        onChange={handleChange}
                        accept="*json"
                      />
                      <span>
                        <FaUpload />
                      </span>
                      Upload
                    </button>
                  </Col>
                </Button>
              </Row>
            </Container>
          </UploadWrapper>
        </div>
      </UploadSection>
    </>
  );
};

export default UploadNft;
