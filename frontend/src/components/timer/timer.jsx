import React, { useEffect, useState } from "react";
import "./timer.css";

const Startimer = ({ time }) => {
  const [endTime, setEndTime] = useState(0);

  const getTimeAsync = async () => {
    setEndTime(time * 1000);
  };
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let interval;
  const startTimer = () => {
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    getTimeAsync();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      <div className="display-timer">
        <div className="timer-flex">
          <div className="d-two">
            <span className="timer-num one">
              <b>{timerDays} </b>
            </span>
            <span className="timer-text one1">days</span>
          </div>
          <div className="">
            <span className="timer-num ">
              {" "}
              <b>{timerHours}</b>
            </span>
            <span className="timer-text">hours</span>
          </div>
          <div className="">
            <span className="timer-num two">
              <b>{timerMinutes}</b>
            </span>
            <span className="timer-text two2">minutes</span>
          </div>
          <div className="">
            <span className="timer-num two">
              {" "}
              <b>{timerSeconds}</b>
            </span>
            <span className="timer-text two2">seconds</span>
          </div>
        </div>
      </div>

      <div className="btn-div"></div>
    </>
  );
};

export default Startimer;
