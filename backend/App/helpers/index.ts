const Web3 = require("web3");
const { CONTRACT_ADDRESS, CONTRACT_ABI } = require("../contract/index");
const axios = require("axios");
const { mintedNfts } = require("../model/nftModel");
require("dotenv").config();

const rpcUrl = process.env.RPC_URL;
console.log("rpcUrl", rpcUrl);
const web3 = new Web3(rpcUrl);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

async function refreshOpenseaData() {
  try {
    const apiKey = process.env.OPENSEA_API;
    const headers = {
      "X-API-KEY": apiKey,
      accept: "application/json",
    };
    let count = await mintedNfts();
    count = count.length;

    const start = count - 150;
    console.log("start", start, count);
    for (let i = start; i < count + 1; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const url = `https://api.opensea.io/api/v1/asset/0x855b5438b7e72fc06e94480e78580651a8cc448e/${i}/?force_update=true`;

      const response = await axios.get(url, { headers });
      console.log("response.data", response.data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export { contract,refreshOpenseaData };
