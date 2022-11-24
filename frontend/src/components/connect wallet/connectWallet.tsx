import React, { useEffect, useState } from "react";
import { mainModel } from "store/redux/slices/helperSlices/modelSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { ConnectBtnImg } from "components/common";
import connectBtn from "assets/images/connectBtn.png";
import { MainModel } from "components/common";
import { Alert, Snackbar } from "@mui/material";

const ConnectWallet = () => {

    const [connectModel, setConnectModel] = useState(false);
    const dispatch = useAppDispatch()
    const [showToast, setShowToast] = useState(false);
    const { web3LoadingErrorMessage } = useAppSelector((state) => state.web3Connect);

    useEffect(() => {
        if (web3LoadingErrorMessage) {
            setShowToast(true);
        }
        setTimeout(() => {
            setShowToast(false);
        }, 6000);
    }, [web3LoadingErrorMessage]);

    const connectModelFn = () => {
        setConnectModel(true);
        dispatch(mainModel(true));
    };

    return (
        <>
            <MainModel connectModel={connectModel} />
            {showToast ? (
                <div>
                    <Snackbar open={showToast} autoHideDuration={3000}>
                        <Alert severity="error" sx={{ width: "100%" }}>
                            Please Connect to avalunche network
                        </Alert>
                    </Snackbar>
                </div>
            ) : (
                ""
            )}
            <ConnectBtnImg src={connectBtn} onClick={connectModelFn} />
        </>
    )
}


export default ConnectWallet;