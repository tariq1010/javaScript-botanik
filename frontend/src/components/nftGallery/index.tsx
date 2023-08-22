import { Footer, Navbar } from "components";
import { ContentWrapper, MintBtn, NFTGalleryWrapper, NftDiv } from "./element";
import { MainContainer } from "components/common";
import { Image } from "react-bootstrap";
import { useState } from "react";
import { imgData } from "./data";
import { AiOutlineCheck } from "react-icons/ai";

function NFTGallery() {
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const toggleSelection = (index) => {
    if (selectedIndexes.includes(index)) {
      setSelectedIndexes(selectedIndexes.filter((i) => i !== index));
    } else {
      setSelectedIndexes([...selectedIndexes, index]);
    }
  };

  return (
    <NFTGalleryWrapper>
      <Navbar />
      <MainContainer>
        <ContentWrapper>
          <NftDiv>
            {imgData?.map((item, index) => (
              <div
                className="image-container"
                onClick={() => toggleSelection(index)}
              >
                <Image
                  src={item.img}
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
          {selectedIndexes?.length > 0 && (
            <MintBtn>Mint {selectedIndexes?.length} NFTs</MintBtn>
          )}
        </ContentWrapper>
      </MainContainer>
      <Footer />
    </NFTGalleryWrapper>
  );
}

export default NFTGallery;
