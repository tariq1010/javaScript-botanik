import React from "react";
import errorIcon from "../../assets/icons/icons8-error-80.png";
import "./errorPage.css";

const ErrorPage = ({ errorMessage }) => {
  return (
    <div className="error-container">
      <div className="error-header">
        <img src={errorIcon} />
        <h2>Oops Something Went Wrong!</h2>
      </div>
      <br />
      <p>
        <span>Error Message:</span> {errorMessage}
      </p>
    </div>
  );
};

export default ErrorPage;
