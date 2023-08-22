const { Nft } = require("../schema/nftSchema");

//--create methods--

// saveNft
const SaveNft = async (nft: any) => {
  try {
    const name = nft.name;
    const description = nft.description;
    const image = nft.image;
    const dna = nft.dna;
    const date = nft.date;
    const edition = nft.edition;
    const attributes = nft.attributes;
    const token_id = nft.token_id;
    const is_minted = nft.is_minted;

    const saveNftDataIntoDb = await Nft.create({
      name,
      description,
      image,
      dna,
      edition,
      is_minted,
      date,
      attributes,
      token_id,
    });
    if (!saveNftDataIntoDb) throw "error";
    console.log(saveNftDataIntoDb, "saved");

    return saveNftDataIntoDb;
  } catch (error) {
    console.log(error);
    return { error: error };
  }
};

//--find methods--

//get all nfts
const allNfts = async () => {
  try {
    const allNfts = await Nft.find().sort({ token_id: 1 });
    console.log(allNfts);
    return allNfts;
  } catch (error) {
    return { error: error };
  }
};

const fetchAllNfts = async () => {
  try {
    const allNfts = await Nft.find().count();

    return allNfts;
  } catch (error) {
    return { error: error };
  }
};
//get random nft for mint
const getRandomNftForMint = async (num: number) => {
  try {
    const number = Number(num);
    const randomNft = await Nft.find({
      $and: [{ is_minted: false }],
    })
      .sort({ token_id: 1 })
      .limit(number);

    return randomNft;
  } catch (error) {
    return { error: error };
  }
};

const nftForUnMint = async (num: number) => {
  try {
    const number = Number(num);
    const randomNft = await Nft({
      $and: [{ is_minted: true }],
    })
      .sort({ token_id: -1 })
      .limit(number);

    return randomNft;
  } catch (error) {
    return { error: error };
  }
};

const nftByImage = async (img: string) => {
  try {
    const byImage = await Nft.find({
      image: img,
    });
    return byImage;
  } catch (error) {
    return { error: error };
  }
};

//get nft by token
const nftByToken = async (token_id: number) => {
  try {
    const getNftByToken = await Nft.findOne({
      $and: [
        {
          token_id: token_id,
          is_minted: true,
        },
      ],
    });
    return getNftByToken;
  } catch (error) {
    return { error: error };
  }
};

//nfts left
const nftsLeft = async () => {
  try {
    const nftsLeft = await Nft.find({ is_minted: false }).count();
    console.log("nftsLeft", nftsLeft);
    return nftsLeft;
  } catch (error) {
    return { error: error };
  }
};

//minted nfts
const mintedNfts = async () => {
  try {
    const mintedNfts = await Nft.find({
      $and: [{ is_minted: true }],
    });
    return mintedNfts;
  } catch (error) {
    return { error: error };
  }
};

//--update methods--

//mint Random Nft

const offChainMint = async (num: number) => {
  try {
    const number = Number(num);
    const randomNft = await Nft.find({
      $and: [{ is_minted: false }],
    })
      .sort({ token_id: 1 })
      .limit(number);

    const update = await Nft.updateMany(
      { token_id: { $in: randomNft.map((nft: any) => nft.token_id) } },
      { is_minted: true }
    );

    return update;
  } catch (error) {
    return { error: error };
  }
};

const offChainUnMint = async (num: number) => {
  try {
    const number = Number(num);
    const randomNft = await Nft.find({
      $and: [{ is_minted: true }],
    })
      .sort({ token_id: -1 })
      .limit(number);

    const update = await Nft.updateMany(
      { token_id: { $in: randomNft.map((nft: any) => nft.token_id) } },
      { is_minted: false }
    );

    return update;
  } catch (error) {
    return { error: error };
  }
};

const mintNfts = async ({ count }: { count: number }) => {
  try {
    const updatedNft = await Nft.updateMany(
      {
        $and: [{ token_id: { $not: { $gt: count } } }, { is_minted: false }],
      },
      {
        $set: {
          is_minted: true,
        },
      }
    );
    console.log(updatedNft, "minted");
    return updatedNft;
  } catch (error) {
    console.log(error, "error");
    return { error: error };
  }
};

const unMintNft = async ({ id }: { id: string }) => {
  try {
    const updatedRandomNft = await Nft.updateMany(
      { is_minted: true },
      {
        $set: {
          is_minted: false,
        },
      }
    );
    return updatedRandomNft;
  } catch (error) {
    return { error: error };
  }
};

const mintNftByTokenId = async (id: any) => {
  try {
    const updatedRandomNft = await Nft.updateOne(
      { token_id: id },
      {
        $set: {
          is_minted: true,
        },
      }
    );
    return updatedRandomNft;
  } catch (error) {
    return { error: error };
  }
};

const updateNftImageById = async (id: any, img: any) => {
  try {
    console.log(id, img);
    const updateimage = await Nft.updateOne(
      { _id: id },
      {
        $set: {
          image: img,
        },
      }
    );
    return updateimage;
  } catch (error) {
    return { error: error };
  }
};

const updateToken_id = async () => {
  try {
    const updatedRandomNft = await Nft.updateMany(
      {
        _id: "61b9ae63e750cdfe25e4d81b",
      },
      {
        $set: {
          is_minted: false,
        },
      }
    );
    console.log(updatedRandomNft);
    return updatedRandomNft;
  } catch (error) {
    return { error: error };
  }
};

const deleteNft = async (ctx: any) => {
  try {
    const disapproved = await Nft.deleteMany();
    ctx.body = {
      data: disapproved,
    };
    return disapproved;
  } catch (error) {
    ctx.body = {
      data: error,
    };
    return { error: error };
  }
};
const nftImages = async (page: any) => {
  try {
    let limit;
    const total_data = await Nft.countDocuments();
    if (Number(page)) {
      limit = page;
    } else {
      limit = total_data;
    }

    const data = await Nft.find().select("image").limit(limit);
    return { data, total_data };
  } catch (error) {
    return { error: error };
  }
};
export {
  allNfts,
  getRandomNftForMint,
  nftForUnMint,
  SaveNft,
  mintNfts,
  unMintNft,
  nftsLeft,
  mintedNfts,
  nftByToken,
  updateToken_id,
  mintNftByTokenId,
  fetchAllNfts,
  nftByImage,
  updateNftImageById,
  deleteNft,
  offChainMint,
  offChainUnMint,
  nftImages,
};
