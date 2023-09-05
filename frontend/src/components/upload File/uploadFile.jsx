import React, { useRef } from "react";
import UploadIcon from "../../assets/icons/icons8-upload-64.png";
import Papa from "papaparse";
import "./fileUpload.css";
import templateCsv from "../../templatecsv.csv";

const FileUPload = ({ saveAddress }) => {
  const inputRef = useRef < HTMLInputElement > null;
  const triggerFileSelectPopup = (event) => {
    inputRef.current?.click();
  };
  const onSelectFile = async (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const files = event.target.files;
      if (files) {
        Papa.parse(files[0], {
          skipEmptyLines: true,
          complete: function (results) {
            results.data.map((array, i) => {
              saveAddress(array[0]);
              event.target.value = null;
            });
          },
        });
      }
    }
  };

  return (
    <div className="upload-container">
      <img width="64x" src={UploadIcon} />
      <p className="mt-3" style={{ color: "white" }}>
        only .csv files are allowed,{" "}
        <a href={templateCsv} download={true}>
          download template file
        </a>
      </p>
      <input
        type="file"
        accept=".csv"
        ref={inputRef}
        id="p1"
        onChange={onSelectFile}
        name="photo"
        style={{ display: "none" }}
      />
      <div className="div-btn-upload">
        <button
          className="btn-upload"
          onClick={(event) => triggerFileSelectPopup(event)}
        >
          Choose CSV
        </button>
      </div>
    </div>
  );
};

export default FileUPload;
