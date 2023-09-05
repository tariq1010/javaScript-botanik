import { Container, TextField, InputLabel } from "@mui/material";
import { useState } from "react";
import "./inputField.css";

const InputField = ({
  headerLabel,
  value,
  setValue,
  max,
  label,
  char,
  onKeyPress,
  description,
  min,
  error,
  name,
  type = "text",
  maxLength,
}) => {
  const maxLengthCheck = (object) => {
    if (object.target.value.length > maxLength) {
      let value = object.target.value.slice(0, maxLength);
      setValue(value);
    }
  };

  return (
    <Container className="input-container">
      <InputLabel style={{ color: "white" }} className="label">
        <b>{headerLabel}</b>
      </InputLabel>
      <InputLabel
        style={{ float: "right", fontSize: "11px" }}
        className="label"
      >
        {char != null ? `${char} / ${maxLength}` : ""}
      </InputLabel>
      <label>Press enter to add address</label>
      <input
        id="filled-password-input"
        // label={label}
        // helperText={description}
        type={type}
        style={{
          color: "red",
        }}
        name={name}
        value={value}
        // inputProps={{
        //     min: min,
        //     max:max,
        //     // color: 'white'
        // }}
        onChange={(e) => {
          setValue(e.target);
          maxLengthCheck(e);
        }}
        className="input"
        autoComplete="current-password"
        // variant="filled"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onKeyPress();
          }
        }}
      />
      {error && (
        <p
          className="help is-danger"
          style={{ color: "red", fontSize: "0.9rem" }}
        >
          *{error}
        </p>
      )}
    </Container>
  );
};

export default InputField;
