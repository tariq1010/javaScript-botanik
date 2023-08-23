import { Footer, Navbar } from "components";
import { ContentWrapper, MintBtn, NFTGalleryWrapper, NftDiv } from "./element";
import {
  Loader,
  MainContainer,
  MainModel,
  openNotification,
} from "components/common";
import { Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { imgData } from "./data";
import { AiOutlineCheck } from "react-icons/ai";
import { GetNftsImagesHook } from "hooks/nftHooks";
import nftgallerimg from "../../assets/images/nftgalleryimg.png";
import ToastMessage from "components/toast Message/toastMessage";
import { CommonUtility } from "utility/common";
import { useAppDispatch, useAppSelector } from "store/store";
import { btkData, mainModel } from "store/redux/slices/helperSlices/modelSlice";
import { BotanikService } from "web3Functions/botanik";

import { userBalanceAsync } from "store/redux/slices/web3ConnectSlice";

function NFTGallery() {
  const { web3, accounts } = useAppSelector((state) => state.web3Connect);
  const { botanikData } = useAppSelector((state) => state.model);
  let pageInitial = 20;
  const dispatch = useAppDispatch();

  const [connectModel, setConnectModel] = useState(false);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [page, setPage] = useState(pageInitial);
  const [status, setStatus] = useState(false);
  const [mintLoading, setMintLoading] = useState(false);

  const toggleSelection = (index) => {
    if (selectedIndexes.includes(index)) {
      setSelectedIndexes(selectedIndexes.filter((i) => i !== index));
    } else if (selectedIndexes?.length < 101) {
      setSelectedIndexes([...selectedIndexes, index]);
    } else {
      ToastMessage(
        "Warning",
        "Max 100 NFTs can be selected at a time",
        "warning"
      );
    }
  };

  const { data: nftImages, loading } = GetNftsImagesHook(page);

  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.pageYOffset;
    const scrollHeight = document.documentElement.scrollHeight;
    if (scrollPosition >= scrollHeight - 180 && !loading) {
      if (page < nftImages?.total) {
        setPage(page + 10);
      }
    }
  };
  useEffect(() => {
    {
      dispatch(btkData());
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nftImages, page, nftImages?.total, loading]);

  const validateFunc = async () => {
    if (
      botanikData?.isPaused ||
      botanikData?.totalSupply >= botanikData?.phaseLimit
    ) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  const mint = async () => {
    try {
      if (status) {
        alert("error");
      } else {
        setMintLoading(true);
        const txn = await BotanikService.mint(
          web3,
          accounts,
          selectedIndexes?.length
        );
        if (txn && txn.status) {
          ToastMessage("Success", "Transaction Successfull", "success");
        }
        if (txn && txn.code) {
          ToastMessage(" ", "Transaction Rejected by User", "error");
          ///////
        }
        dispatch(btkData());
        console.log(txn);
        validateFunc();
        setMintLoading(false);
      }
    } catch (error) {
      console.log(error);
      setMintLoading(false);
    }
  };

  const connectModelFn = () => {
    setConnectModel(true);

    dispatch(mainModel(true));
  };

  //useEffects
  useEffect(() => {
    web3 && dispatch(userBalanceAsync());
  }, [web3]);

  return (
    <NFTGalleryWrapper>
      {((loading && page == pageInitial) || mintLoading) && <Loader />}
      {/* { mintLoading) && <Loader />} */}
      <MainModel connectModel={connectModel} />

      <div className="top-content">
        <Navbar />
        <MainContainer>
          <ContentWrapper>
            <NftDiv>
              {nftImages?.nfts_images?.map((item, index) => (
                <div
                  className="image-container"
                  onClick={() => {
                    toggleSelection(index);
                  }}
                >
                  <Image
                    src={CommonUtility.covertIpfsUrl(item.image)}
                    alt={`NFT ${index}`}
                    className={`${
                      selectedIndexes.includes(index) ? "darken" : ""
                    }`}
                  />

                  {selectedIndexes.includes(index) && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <rect
                        width="18.2285"
                        height="18.2285"
                        rx="2.27856"
                        fill="#5EA624"
                      />
                      <path
                        d="M12.8644 4.2851L7.60373 10.4921L4.85819 7.43412L3.44618 8.70094L7.66824 13.4069L14.3551 5.70924L12.8644 4.2851Z"
                        fill="#FFFFFE"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </NftDiv>

            {selectedIndexes?.length > 0 && accounts ? (
              <div>
                <MintBtn
                  onClick={(event) => {
                    if (botanikData?.totalSupply === botanikData?.maxSupply) {
                      openNotification(
                        "Supply Completed",
                        "Limit Reached",
                        "warning"
                      );
                    } else if (botanikData?.isPaused) {
                      openNotification("Paused", "Minting paused", "warning");
                    } else {
                      mint();
                    }
                  }}
                >
                  Mint {selectedIndexes?.length} NFTs
                </MintBtn>
              </div>
            ) : (
              !accounts &&
              !loading && (
                <MintBtn onClick={() => connectModelFn()}>
                  Connect Wallet
                </MintBtn>
              )
            )}
          </ContentWrapper>
        </MainContainer>
      </div>
      <Footer />
    </NFTGalleryWrapper>
  );
}

export default NFTGallery;
