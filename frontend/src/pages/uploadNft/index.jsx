import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { UploadNftHook } from "hooks/uploadNftHooks";
import styled from "styled-components";
import { openNotification } from "components/common";
import { useAppSelector } from "../../store/store";
import Backdrop from "../../components/backdrop/backdrop";
// import img from "../../assets/images/bgimage.jpeg";
import { FaUpload } from "react-icons/fa";
import samplejson from "../../assets/sample.json";
import MainNavbar from "components/navbar";
import { LogoutHook } from "hooks/adminhooks";
const UploadSection = styled.div`
  background-image: url();
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
  /* margin-left: 48rem; */
  color: white;
`;

const BtnContainer = styled.div`
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

const DownloadLink = styled.div`
  text-align: center;
  padding-left: 4rem;
  padding-top: 1rem;

  a {
    color: white;
  }
`;

const UploadNft = () => {
  const [files, setFiles] = useState("");
  const { data, uploadHandle, loading } = UploadNftHook();

  console.log("upload", data?.data?.message);

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      let data = e.target.result;

      if (Array.isArray(JSON.parse(data))) {
        setFiles(e.target.result);
      } else {
        openNotification("Invalid File", "", "error");
      }
    };
  };

  const { token_temp } = useAppSelector((state) => state.login);

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

  const { logout } = LogoutHook();
  useEffect(() => {
    if (!token_temp) {
      logout();
    }
  }, []);

  return (
    <>
      <Backdrop loading={loading} />
      <MainNavbar />

      <UploadSection>
        <div className="overlayBg">
          <UploadWrapper>
            <Row>
              <BtnContainer>
                <Col>
                  <button onClick={handleClick}>
                    <input
                      type="file"
                      hidden
                      ref={hiddenFileInput}
                      onChange={handleChange}
                      accept="application/JSON"
                    />
                    <span>
                      <FaUpload />
                    </span>
                    Upload
                  </button>
                </Col>
                <DownloadLink>
                  <a
                    href={`data:text/json;charset=utf-8,${encodeURIComponent(
                      JSON.stringify(samplejson)
                    )}`}
                    download="sample.json"
                  >
                    Download Sample
                  </a>
                </DownloadLink>
              </BtnContainer>
            </Row>
          </UploadWrapper>
        </div>
      </UploadSection>
    </>
  );
};

export default UploadNft;
