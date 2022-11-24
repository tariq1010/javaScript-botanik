import React from "react";
import {
    MainCounter,
    CounterValue,
    CounterBtn,
} from "./homeElement";


const InputNumbers = ({ num, setNum, error, validate, setErrors, remaingNftLength, setIsSubmitting }: { validate: any, setErrors: any, num: number, setNum: any, setIsSubmitting: any, error: any, remaingNftLength: any }) => {

    const onChange = (type) => {
        if (type === 'increment' && num < 10) {
            setNum(num + 1)
            setErrors(validate({ num: num + 1, nftleft: remaingNftLength }));
        }
        else if (type === 'decrement' && num > 0) {
            setNum(num - 1)
            setErrors(validate({ num: num - 1, nftleft: remaingNftLength }));
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