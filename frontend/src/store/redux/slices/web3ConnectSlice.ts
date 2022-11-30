import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import WalletConnectProvider from "@walletconnect/web3-provider";
import EthContract from "web3-eth-contract";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../../../contract/index';
import { RootStateType, useAppDispatch } from "../../store";
import { stateClear } from "./mintNftSlice";
import { setTransaction } from "./mintNftSlice";
import NFTService from "services/nftServices";


export type StateType = {
  web3: null | Web3;
  contract: null | EthContract.Contract;
  address: null;
  accounts: string[];
  transaction: boolean,
  web3LoadingErrorMessage: string;
  web3Loading: boolean;
  ErrorMessage: string;
  ownerAddress: string;
  userBalance: number;
  provider: null;
  mintLoading: boolean
};

type Web3ConnectPayloadType = {
  web3: Web3;
  accounts: string[];
  web3Loading: boolean;
  ownerAddress: string;
  userBalance: number;
  marketPlaceContract: EthContract.Contract;
  web3LoadingErrorMessage: string;
};
type AsyncMintType = {
  mintLoading: boolean
};

export const initialState: StateType = {
  web3: null,
  contract: null,
  address: null,
  ownerAddress: "",
  accounts: [],
  userBalance: 0,
  transaction: false,
  web3LoadingErrorMessage: "",
  web3Loading: false,
  ErrorMessage: "",
  provider: null,
  mintLoading: false
};

export const loadBlockchain: any = createAsyncThunk(
  "loadwalletcoonnect",
  async (_, thunkAPI) => {
    try {
      console.log(" Web3.givenProvider.chainId == 0x38", Web3.givenProvider.chainId)
      // if (Web3.givenProvider && Web3.givenProvider.chainId == 0xa869) {
      if (Web3.givenProvider) {
        await Web3.givenProvider.enable();
        const web3 = new Web3(Web3.givenProvider);
        const accounts = await web3.eth.getAccounts();
        const marketPlaceContract: EthContract.Contract = new web3.eth.Contract(
          CONTRACT_ABI as AbiItem[],
          CONTRACT_ADDRESS
        );
        return {
          web3,
          accounts,
          marketPlaceContract,
        };
      } else {
        console.log("error connecting to metamask");
        return {
          web3LoadingErrorMessage: "error connecting to metamask"
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
);



// Connect with Wallet of users choice
export const loadWalletConnect: any = createAsyncThunk(
  "LoadWalletConnect",
  async (_, thunkAPI) => {
    try {
      const provider = new WalletConnectProvider({
        rpc: {
          43114: "https://api.avax.network/ext/bc/C/rpc",
        },
        chainId: 43114,
      });
      console.log("Provider", provider);
      if (provider) {
        await provider.enable();
        const web3 = new Web3(provider as any);
        console.log("Web3", web3);
        const accounts = await web3.eth.getAccounts();
        console.log("accounts", accounts);
        const marketPlaceContract: EthContract.Contract = new web3.eth.Contract(
          CONTRACT_ABI as AbiItem[],
          CONTRACT_ADDRESS
        );

        return {
          web3,
          accounts,
          marketPlaceContract,

        };
      } else {
        return {
          web3LoadingErrorMessage:
            "Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!",
        };
      }
    } catch (err) {
      console.log(err);
    }
  }
);


type Data = {
  nftCount: number,
  nftFees: number,
  proof: string
}


// export const mintNftAsync: any = createAsyncThunk("publicSaleMintAsync", async (data: Data, thunkAPI) => {
//   const state = thunkAPI.getState() as RootStateType;
//   const { contract, accounts, web3, transaction } = state.web3Connect;
//   let nftCount = data.nftCount;
//   let nftFees = data.nftFees;
//   let nftFeesRound = nftFees.toFixed(5)
//   let mintLoading = true;

//   let nftFeesDecimals = web3 ? web3.utils.toWei(`${nftFeesRound}`, 'ether') : 0;
//   const result = async () => {
//     try {
//       console.log("Started Minting NFT from public sale");
//       let result = await contract?.methods
//         .mint(nftCount)
//         .send({
//           from: accounts[0],
//           value: nftFeesDecimals,
//         }, async (err: any, transactionHash: any) => {

//         });
//       if (result) {
//         new NFTService().getUpdatedCount()
//         mintLoading = false
//       }
//       return {
//         mintLoading,
//         result
//       };

//     } catch (error) {
//       console.log("User rejected the transaction");
//       return error

//     }
//   }

//   const resulss = await result();
//   console.log("RESULT OF RETURN___", resulss)
// });


export const mintNftAsync: any = async(contract,accounts, web3, data: Data)=> {
  
  let quantity = data.nftCount;
  let nftFees = data.nftFees;
  let nftFeesRound = nftFees.toFixed(5)
  const merkleHash = data.proof
  let mintLoading = true;

  let nftFeesDecimals = web3 ? web3.utils.toWei(`${nftFeesRound}`, 'ether') : 0;
    try {
      console.log("Started Minting NFT from public sale");
      let result = await contract?.methods
        .mint(quantity, merkleHash)
        .send({
          from: accounts[0],
          value: nftFeesDecimals,
        }, async (err: any, transactionHash: any) => {

        });
      if (result) {
        new NFTService().getUpdatedCount()
        mintLoading = false
      }
      return {
        mintLoading,
        result
      };

    } catch (error) {
      console.log("User rejected the transaction", error);
      return error

    }
  

}

//current token_id

export const nftCountAsync = async (contract: any) => {

  try {
    let result = await contract?.methods.currentSupply().call();
    return result;
  } catch (error) {
    console.log("User rejected the transaction");
    return error;
  }
}


export const totalSupplyAsync = createAsyncThunk("totalSupplyAsync", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootStateType;
  const { contract, accounts, web3 } = state.web3Connect;

  try {
    let result = await contract?.methods._maxSupply().call();
    return result;
  } catch (error) {
    console.log("User rejected the transaction");
    return error;
  }
});


export const mintFeeAsync = createAsyncThunk("mintFeeAsync", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootStateType;
  const { contract, accounts, web3 } = state.web3Connect;

  try {
    let result = await contract?.methods.pricePerMint().call();
    return result;
  } catch (error) {
    console.log("User rejected the transaction");
    return error;
  }
});

export const setMerkleRootAsync = createAsyncThunk("setPreSaleWhiteListAddress", async (_merkle: any, thunkAPI) => {
  const state = thunkAPI.getState() as RootStateType;
  const { contract, accounts, web3 } = state.web3Connect;

  console.log(_merkle, contract, accounts, "dataaaaaaaaa")
  try {
    let result = await contract?.methods.setMerkleRoot(_merkle).send({
      from: accounts[0],
    }, async (err: any, transactionHash: any) => {

    });
    console.log(result, "whitelist adddeddd")
    return result;
  } catch (error) {
    console.log("User rejected the transaction", error);
    return error;
  }
});

export const ownerAsync: any = createAsyncThunk("ownerAsync", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootStateType;
  const { contract, accounts, web3 } = state.web3Connect;
  try {
    let result = await contract?.methods.owner().call();
    console.log(result, "owner address")
    const ownerAddress = result
    return {
      ownerAddress
    };
  } catch (error) {
    console.log("User rejected the transaction");
    return error;
  }
});


export const userBalanceAsync: any = createAsyncThunk("userBalanceAsync", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootStateType;
  const { contract, accounts, web3 } = state.web3Connect;
  try {
    let result = await contract?.methods.balanceOf(accounts[0]).call();
    console.log(result, "user balance")
    const userBalance = result
    return {
      userBalance
    };
  } catch (error) {
    console.log("User rejected the transaction", error);
    return error;
  }
});



const web3ConnectSlice = createSlice({
  name: "Web3Connect",
  initialState,
  reducers: {},
  extraReducers: {
    [loadWalletConnect.fulfilled.toString()]: (
      state,
      { payload }: PayloadAction<Web3ConnectPayloadType>
    ) => {
      state.web3 = payload?.web3;
      state.accounts = payload?.accounts;
      state.web3Loading = false;
      state.contract = payload?.marketPlaceContract;
      // state.web3LoadingErrorMessage = payload?.web3LoadingErrorMessage
    },
    [loadBlockchain.fulfilled.toString()]: (
      state,
      { payload }: PayloadAction<Web3ConnectPayloadType>
    ) => {
      console.log("payload>>>", payload)
      state.web3 = payload?.web3;
      state.accounts = payload?.accounts;
      state.web3Loading = false;
      state.contract = payload?.marketPlaceContract;
      state.web3LoadingErrorMessage = payload?.web3LoadingErrorMessage;
      state.ownerAddress = payload?.ownerAddress
    },
    [ownerAsync.fulfilled.toString()]: (
      state,
      { payload }: PayloadAction<Web3ConnectPayloadType>
    ) => {
      console.log("payload>>>", payload)
      state.ownerAddress = payload?.ownerAddress
    },
    [userBalanceAsync.fulfilled.toString()]: (
      state,
      { payload }: PayloadAction<Web3ConnectPayloadType>
    ) => {
      console.log("payload>>>", payload)
      state.userBalance = payload?.userBalance
    },
  },
});

export const web3Reducer = web3ConnectSlice.reducer;
