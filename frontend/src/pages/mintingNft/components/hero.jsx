import React from "react";
import Timer from "../../../components/timer/timer";
import { Container } from "@mui/material";

const Hero = ({ startTime, endTime }) => {
  return (
    <div className="div-hero">
      <Container>
        <div
          style={{
            border: "10px solid #FFEE00",
            borderRadius: "20px",
            padding: "1rem",
          }}
        >
          <h2 style={{ textAlign: "center", marginTop: "20px" }}>
            Presale Start Time
          </h2>
          <Timer time={startTime} />
          <h2 style={{ textAlign: "center" }}>Presale End Time</h2>
          <Timer time={endTime} />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
