import React from "react";
import {
    MainCounter,
    CounterValue,
    CounterBtn,
} from "./homeElement";


const InputNumbers = ({ num, setNum, error, validate, setErrors, remaingNftLength, setIsSubmitting ,setStatus,botanikConfig,status}: { validate: any, setErrors: any, num: number, setNum: any, setIsSubmitting: any, error: any, remaingNftLength: any ,setStatus?:any,botanikConfig?:any, status?:any}) => {
   // setStatus(true)
   console.log("num,", num , botanikConfig?.totalSupply, botanikConfig?.phaseLimit)
    const onChange = (type) => {
        if (type === 'increment' && (botanikConfig?.totalSupply) + num < (botanikConfig?.phaseLimit)) {
            console.log("abc",botanikConfig.totalSupply + num);
            setNum(num + 1)
            setErrors(validate({ num: num + 1, nftleft: remaingNftLength }));
            console.log("Status",status)
          
        }
        else if (type === 'decrement' && num > 0) {
            setNum(num - 1)
            setErrors(validate({ num: num - 1, nftleft: remaingNftLength }));
             setStatus(false)
            console.log("Status",status)
        }

        setIsSubmitting(false)
    }

    return (
        <>
            <MainCounter>
                <CounterBtn incrementBtn onClick={() => onChange("decrement")}>
                    -
                </CounterBtn>
                <CounterValue >{num}</CounterValue>
                <CounterBtn decrementBtn onClick={() => onChange("increment")}>
                    +
                </CounterBtn>

            </MainCounter>

            {
                error && (
                    <p
                        className="help is-danger"
                        style={{ color: "red", fontSize: "0.9rem" }}
                    >
                        *{error}
                    </p>
                )
            }
        </>

    )
}

export default InputNumbers