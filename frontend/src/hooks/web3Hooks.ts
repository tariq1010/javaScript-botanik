import openNotification from "components/common/toatMessage/toastMessage";
import { useEffect, useMemo, useState } from "react";
import { isMintingPaused, mintLimit, mintStatusWeb3, whitelistMintStatus } from "store/redux/slices/contractFunctions/read";
import { useAppSelector } from "store/store";


export const PhaseCountHook = () => {
    const [phaseMintLimit, setPhaseMintLimit] = useState<number>()
    const { contract } = useAppSelector((state) => state.web3Connect)
   // const { mintedCount } = useAppSelector((state) => state.mintNft);

    const phaseLimit = async () => {
        const limit = await mintLimit(contract)
        setPhaseMintLimit(+limit)
    }
    useEffect(() => {
        if (contract) {
            phaseLimit();
        }
    }, [contract]);

    // useEffect(() => {
    //     phaseMintLimit === mintedCount && openNotification('Phase Completed', 'Current phase of minting has reached its minting limit', 'warning')
    // }, [phaseMintLimit])

    return {
      //  mintedCount,
        phaseMintLimit,
        phaseLimit,
      //  remainingInPhase: phaseMintLimit - (+mintedCount)
    }
}

export const GetMintStatusHook = () => {
    const [mintPauseStatus, setMintPauseStatus] = useState(false);
    const [whitelistStatus, setWhitelistStatus] = useState(false);
    const [statusLoading, setStatusLoaidng] = useState(false);
    const { contract } = useAppSelector((state) => state.web3Connect)

    const getMintStatus = async () => {
        try {
            setStatusLoaidng(true)
            let isMint = await mintStatusWeb3(contract);
           // let isWhitelist = await whitelistMintStatus(contract);
           // setWhitelistStatus(isWhitelist);
            setMintPauseStatus(isMint)
            setStatusLoaidng(false)
        } catch (error) {
            setStatusLoaidng(false)
            console.log("error", error);
        }
    };
    useEffect(() => {
        if (contract) {
            getMintStatus();
        }
    }, [contract]);

    return {
        mintPauseStatus,
        whitelistStatus,
        statusLoading,
        getMintStatus,
    }
}

