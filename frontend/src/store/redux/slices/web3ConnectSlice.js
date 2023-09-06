import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import WalletConnectProvider from "@walletconnect/web3-provider";
import EthContract from "web3-eth-contract";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../../../contract/index";
import { RootStateType } from "../../store";
import NFTService from "services/nftServices";
import { ContractUtility } from "utility/contract-utility";
import UniversalProvider from "@walletconnect/universal-provider";
import { Web3Modal } from "@web3modal/standalone";
export const initialState = {
  web3: null,
  contract: null,
  address: null,
  chainId: null,
  ownerAddress: "",
  accounts: "",
  userBalance: 0,
  transaction: false,
  web3LoadingErrorMessage: "",
  web3Loading: false,
  ErrorMessage: "",
  provider: null,
  mintLoading: false,
};

export const loadBlockchain = createAsyncThunk(
  "loadwalletcoonnect",
  async (_, thunkAPI) => {
    try {
      console.log(
        " Web3.givenProvider.chainId == 0x38",
        Web3.givenProvider.chainId
      );
      // if (Web3.givenProvider && Web3.givenProvider.chainId == 0xa869) {
      if (Web3.givenProvider) {
        await Web3.givenProvider.enable();
        const web3 = new Web3(Web3.givenProvider);
        let accounts = await web3.eth.getAccounts();
        accounts = accounts[0];
        let chainId = await web3.eth.getChainId();
        await web3.givenProvider.request({
          method: "wallet_switchEthereumChain",
          // params: [{ chainId: Protocols.bsc.chainId.mainnet }],
          params: [{ chainId: "0x1" }],
        });
        const marketPlaceContract = new web3.eth.Contract(
          CONTRACT_ABI,
          CONTRACT_ADDRESS
        );
        return {
          web3,
          accounts,
          chainId,
          marketPlaceContract,
        };
      } else {
        console.log("error connecting to metamask");
        return {
          web3LoadingErrorMessage: "error connecting to metamask",
        };
      }
    } catch (err) {
      console.log(err);
    }
  }
);

// Connect with Wallet of users choice

export const loadWalletConnect = createAsyncThunk(
  "LoadWalletConnect",
  async (chain, address) => {
    try {
      const DEFAULT_PROJECT_ID = "1eccdcef1fec662a8e65ca062f39ed04";
      const DEFAULT_RELAY_URL = "wss://relay.walletconnect.com";
      console.log(address, chain, "ayaaaaaa");
      const connector = await UniversalProvider.init({
        projectId: DEFAULT_PROJECT_ID,
        logger: "debug",
        relayUrl: DEFAULT_RELAY_URL,
      });

      const web3Modal = new Web3Modal({
        projectId: DEFAULT_PROJECT_ID || "",
        walletConnectVersion: 2,
      });

      connector.on("display_uri", async (uri) => {
        console.log("EVENT", "QR Code Modal open");
        web3Modal?.openModal({ uri });
      });

      // Subscribe to session ping
      connector.on("session_ping", ({ id, topic }) => {
        console.log("EVENT", "session_ping");
        console.log(id, topic);
      });

      // Subscribe to session event
      connector.on("session_event", ({ event, chainId }) => {
        console.log("EVENT", "session_event");
        console.log(event, chainId);
      });

      // Subscribe to session update
      connector.on("session_update", ({ topic, session }) => {
        console.log("EVENT", "session_updated");
      });

      // Subscribe to session delete
      connector.on("session_delete", ({ id, topic }) => {
        console.log("EVENT", "session_deleted");
        console.log(id, topic);
        // resetApp();
      });
      let rpc;
      if (chain === 5) {
        rpc = { 5: "https://rpc.goerli.mudit.blog" };
      } else {
        rpc = {
          80001: "https://rpc-mumbai.matic.today",
        };
      }

      await connector.connect({
        namespaces: {
          eip155: {
            methods: [
              "eth_sendTransaction",
              "eth_signTransaction",
              "eth_sign",
              "personal_sign",
              "eth_signTypedData",
            ],
            chains: [`eip155:1`],
            events: ["chainChanged", "accountsChanged"],
            rpcMap: rpc,
          },
        },
        // pairingTopic: pairing?.topic,
      });

      const accounts = await connector.enable();
      let account = accounts[0];
      console.log("accounts", accounts);

      web3Modal?.closeModal();

      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const signer = await provider.getSigner();
      // const { chainId } = await provider.getNetwork();

      // if (chain === chainId) {
      //   const web3 = provider;
      //   const data = {
      //     account,
      //     web3,
      //     chainId,
      //     signer
      //   };
      //   console.log("data", data);
      // return data;
      // } else {
      //   throw new Error("Chain ID does not match.");
      // }
    } catch (err) {
      console.error("Error:", err);
      throw err;
    }
  }
);

export const loadWalletConnects = createAsyncThunk(
  "LoadWalletConnect",
  async (_, thunkAPI) => {
    try {
      const provider = new WalletConnectProvider({
        rpc: {
          1: "https://mainnet.infura.io/v3/",
        },
        chainId: 1,
      });
      console.log("Provider", provider);
      if (provider) {
        await provider.enable();
        const web3 = new Web3(provider);
        console.log("Web3", web3);
        const accounts = await web3.eth.getAccounts();
        console.log("accounts", accounts);
        const marketPlaceContract = new web3.eth.Contract(
          CONTRACT_ABI,
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

export const mintNftAsync = async (contract, accounts, web3, data) => {
  let quantity = data.nftCount;
  let nftFees = data.nftFees;
  let nftFeesRound = nftFees.toFixed(5);
  const merkleHash = data.proof;
  let mintLoading = true;

  let nftFeesDecimals = web3 ? web3.utils.toWei(`${nftFeesRound}`, "ether") : 0;
  try {
    console.log("Started Minting NFT from public sale");
    let result = await contract?.methods.mint(quantity, merkleHash).send(
      {
        from: accounts,
        value: nftFeesDecimals,
      },
      async (err, transactionHash) => {}
    );
    if (result) {
      new NFTService().getUpdatedCount();
      mintLoading = false;
    }
    return {
      mintLoading,
      result,
    };
  } catch (error) {
    console.log("User rejected the transaction", error);
    return error;
  }
};

//current token_id

export const nftCountAsync = async (contract) => {
  try {
    let result = await contract?.methods.currentSupply().call();
    return result;
  } catch (error) {
    console.log("User rejected the transaction");
    return error;
  }
};

export const totalSupplyAsync = createAsyncThunk(
  "totalSupplyAsync",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { contract, accounts, web3 } = state.web3Connect;

    try {
      let result = await contract?.methods._maxSupply().call();
      return result;
    } catch (error) {
      console.log("User rejected the transaction");
      return error;
    }
  }
);

export const mintFeeAsync = createAsyncThunk(
  "mintFeeAsync",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { contract, accounts, web3 } = state.web3Connect;

    try {
      let result = await contract?.methods.pricePerMint().call();
      return result;
    } catch (error) {
      console.log("User rejected the transaction");
      return error;
    }
  }
);

export const setMerkleRootAsync = createAsyncThunk(
  "setPreSaleWhiteListAddress",
  async (_merkle, thunkAPI) => {
    const state = thunkAPI.getState();
    const { contract, accounts, web3 } = state.web3Connect;

    console.log(_merkle, contract, accounts, "dataaaaaaaaa");
    try {
      let result = await contract?.methods.setMerkleRoot(_merkle).send(
        {
          from: accounts,
        },
        async (err, transactionHash) => {}
      );
      console.log(result, "whitelist adddeddd");
      return result;
    } catch (error) {
      console.log("User rejected the transaction", error);
      return error;
    }
  }
);

export const ownerAsync = createAsyncThunk(
  "ownerAsync",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { contract, accounts, web3 } = state.web3Connect;
    try {
      let result = await contract?.methods.owner().call();
      console.log(result, "owner address");
      const ownerAddress = result;
      return {
        ownerAddress,
      };
    } catch (error) {
      console.log("User rejected the transaction");
      return error;
    }
  }
);

export const userBalanceAsync = createAsyncThunk(
  "userBalanceAsync",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { contract, accounts, web3 } = state.web3Connect;
    try {
      let result = await contract?.methods.balanceOf(accounts).call();
      console.log(result, "user balance");
      const userBalance = result;
      return {
        userBalance,
      };
    } catch (error) {
      console.log("User rejected the transaction", error);
      return error;
    }
  }
);

export const switchNetwork = async (web3, network) => {
  try {
    console.log(
      ContractUtility.getChainId(network),
      ContractUtility.getNetworkText(network),
      ContractUtility.getSymbol(network),
      ContractUtility.getNetworkExplorer(network),
      ContractUtility.getNetworkRpc(network),
      network,
      "configss"
    );
    await web3.currentProvider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: ContractUtility.getChainId(network) }],
    });
  } catch (error) {
    if (error.code == 4902) {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: ContractUtility.getChainId(network),
            chainName: ContractUtility.getNetworkText(network),
            nativeCurrency: {
              name: network,
              symbol: ContractUtility.getSymbol(network),
              decimals: 18,
            },
            blockExplorerUrls: [ContractUtility.getNetworkExplorer(network)],
            rpcUrls: [ContractUtility.getNetworkRpc(network)],
          },
        ],
      });
    }
    console.log("error", error);
  }
};

const web3ConnectSlice = createSlice({
  name: "Web3Connect",
  initialState,
  reducers: {
    updateAccount: (state, { payload }) => {
      state.accounts = payload?.accounts;
    },
    logoutWallet: (state) => {
      state.web3 = null;
      state.accounts = null;
      state.web3Loading = null;
      state.contract = null;
    },
  },
  extraReducers: {
    [loadWalletConnect.fulfilled.toString()]: (state, { payload }) => {
      state.web3 = payload?.web3;
      state.accounts = payload?.accounts;
      state.web3Loading = false;
      state.contract = payload?.marketPlaceContract;
      // state.web3LoadingErrorMessage = payload?.web3LoadingErrorMessage
    },
    [loadBlockchain.fulfilled.toString()]: (state, { payload }) => {
      console.log("payload>>>", payload);
      state.web3 = payload?.web3;
      state.accounts = payload?.accounts;
      state.web3Loading = false;
      state.contract = payload?.marketPlaceContract;
      state.web3LoadingErrorMessage = payload?.web3LoadingErrorMessage;
      state.ownerAddress = payload?.ownerAddress;
    },
    [ownerAsync.fulfilled.toString()]: (state, { payload }) => {
      console.log("payload>>>", payload);
      state.ownerAddress = payload?.ownerAddress;
    },
    [userBalanceAsync.fulfilled.toString()]: (state, { payload }) => {
      console.log("payload>>>", payload);
      state.userBalance = payload?.userBalance;
    },
  },
});

export const web3Reducer = web3ConnectSlice.reducer;
export const { updateAccount, logoutWallet } = web3ConnectSlice.actions;
