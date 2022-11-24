import Moralis from 'moralis';
import {CONTRACT_ADDRESS} from '../contract/index';
//export const userNftCollection =  []

export const userCollectionAsync = async (userAddress, setCollection) => {
    try {
        let userCollection= new Array();
        const serverUrl = "https://joo2xdpvqg6v.usemoralis.com:2053/server";
        const appId = "5PFX2ct8ntliyTl67jorMImsSs8ro1vCHR5e5DCR";
        // let t = await Moralis.start({serverUrl,appId})
        Moralis.initialize(appId);
        Moralis.serverURL = serverUrl; 
        const options = {
            chain: "avalanche", address: userAddress
        };
        const nfts = await Moralis.Web3.getNFTs(options);
        if (nfts.length != 0) {
            for (let i = 0; i < nfts.length; i++) {
                if ((nfts[i].token_address).toLocaleLowerCase() == CONTRACT_ADDRESS.toLocaleLowerCase()) {
                    userCollection.push(nfts[i])
                }
            }
        }
        console.log("userCollection",userCollection) 
        setCollection(userCollection)
    }
    catch (error) {
        console.log("receipt", error)

    }
}

