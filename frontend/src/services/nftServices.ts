import NetworkService from "./networkService";

class NFTService {

    async getMintedNfts(data: any) {

        return await new NetworkService().callBackendEndpoint({
            method: "get",
            endpoint: "nfts_minted",
            headers: {
                'authorization': `Bearer ${data.token}`
            }
        })
    }
    async getRemainigNfts() {

        return await new NetworkService().callBackendEndpoint({
            method: "get",
            endpoint: "nft_left"
        })
    }

    async mintNft(data: any) {

        return await new NetworkService().callBackendEndpoint({
            method: "put",
            endpoint: "mint_nfts",
            data: { count: data.count },
            headers: {
                'authorization': `Bearer ${data.token}`
            }
        })
    }

    async getUpdatedCount() {

        return await new NetworkService().callBackendEndpoint({
            method: "get",
            endpoint: "updated-route"
        })
    }

    async unMintNft(data: any) {

        return await new NetworkService().callBackendEndpoint({
            method: "put",
            endpoint: "un_mint_nft",
            data: { id: data.id },
            headers: {
                'authorization': `Bearer ${data.token}`
            }
        })
    }

    async getRandomNft(data: any) {

        return await new NetworkService().callBackendEndpoint({
            method: "post",
            endpoint: "random_nft_for_mint",
            data: { number: data.number },
            headers: {
                'authorization': `Bearer ${data.token}`
            }
        })
    }

    async getNftForUnMint(data: any) {

        return await new NetworkService().callBackendEndpoint({
            method: "post",
            endpoint: "nft_for_un_mint",
            data: { number: data.number },
            headers: {
                'authorization': `Bearer ${data.token}`
            }
        })
    }

    async getFees() {
        return await new NetworkService().callBackendEndpoint({
            method: "get",
            endpoint: "get_fee",
        })
    }

    async getNftByTokenId(id:any) {
        return await new NetworkService().callBackendEndpoint({
            method: "get",
            endpoint: `nft/${id}`,
        })
    }

    async generateToken(values: any) {
        return await new NetworkService().callBackendEndpoint({
            method: "post",
            endpoint: "generate_token",
            data: { accounts: values.accounts }
        })
    }


}

export default NFTService;
