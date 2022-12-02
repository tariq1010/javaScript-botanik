const { Nft } = require("../schema/nftSchema");

const uploadNftModel = async (file: any) => {
  try {
    // console.log("uploadNft", file);

    const nftData = await Nft.find({});

    const token_length =
      nftData.length > 0 ? nftData[nftData?.length - 1]?.token_id : 0;
    // console.log("tokenLength", token_length, nftData);

    const shuffleArr = file.sort(() => Math.random() - 0.5);

    shuffleArr.map((item: any, index: any) => {
      item.token_id = token_length + (index + 1);
      item.is_minted = false;
    });

    const saveData = await Nft.insertMany(file);
    if (!saveData) throw "Nft Not Saved";
    return {
      status: true,
      message: "Nft Uploaded Successfully",
      data: saveData,
    };
  } catch (error) {
    return { status: false, message: error };
  }
};

export { uploadNftModel };
