import React from "react";
import { MainCounter, CounterValue, CounterBtn } from "./homeElement";

const InputNumbers = ({
  num,
  setNum,
  error,
  validate,
  setErrors,
  remaingNftLength,
  setIsSubmitting,
  setStatus,
  botanikConfig,
  status,
}: {
  validate: any;
  setErrors: any;
  num: number;
  setNum: any;
  setIsSubmitting: any;
  error: any;
  remaingNftLength: any;
  setStatus?: any;
  botanikConfig?: any;
  status?: any;
}) => {
  // setStatus(true)
  console.log(
    "num,",
    num,
    botanikConfig?.totalSupply,
    botanikConfig?.phaseLimit
  );
  const onChange = (type) => {
    if (
      type === "increment" &&
      botanikConfig?.totalSupply + num < botanikConfig?.phaseLimit
    ) {
      console.log("abc", botanikConfig.totalSupply + num);
      if (Number(num) <= 199) {
        setNum(num + 1);
      } else {
        setErrors(validate({ num: num + 1, nftleft: remaingNftLength }));
      }

      console.log("Status", status);
    } else if (type === "decrement" && num > 0) {
      setNum(num - 1);
      setErrors(validate({ num: num - 1, nftleft: remaingNftLength }));
      setStatus(false);
      console.log("Status", status);
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <MainCounter>
        <CounterBtn incrementBtn onClick={() => onChange("decrement")}>
          -
        </CounterBtn>
        <input
          type="number"
          className="counterInput"
          value={num}
          name="num"
          onChange={(e) => {
            if (Number(e.target.value) <= 200 && Number(e.target.value) > 0) {
              setNum(Number(e.target.value));
            }
          }}
        />

        <CounterBtn decrementBtn onClick={() => onChange("increment")}>
          +
        </CounterBtn>
      </MainCounter>
    </>
  );
};

export default InputNumbers;
