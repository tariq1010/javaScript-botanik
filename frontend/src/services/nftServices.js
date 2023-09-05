import { APIPath } from "utility/constant/apiPath";
import { BaseService } from "./baseService";
import NetworkService from "./networkService";

class NFTService {
  async getMintedNfts(data) {
    return await new NetworkService().callBackendEndpoint({
      method: "get",
      endpoint: "nfts_minted",
      headers: {
        authorization: `Bearer ${data.token}`,
      },
    });
  }
  async getRemainigNfts() {
    return await new NetworkService().callBackendEndpoint({
      method: "get",
      endpoint: "nft_left",
    });
  }

  async mintNft(data) {
    return await new NetworkService().callBackendEndpoint({
      method: "put",
      endpoint: "mint_nfts",
      data: { count: data.count },
      headers: {
        authorization: `Bearer ${data.token}`,
      },
    });
  }

  async getUpdatedCount() {
    return await new NetworkService().callBackendEndpoint({
      method: "get",
      endpoint: "updated-route",
    });
  }

  async unMintNft(data) {
    return await new NetworkService().callBackendEndpoint({
      method: "put",
      endpoint: "un_mint_nft",
      data: { id: data.id },
      headers: {
        authorization: `Bearer ${data.token}`,
      },
    });
  }

  async getRandomNft(data) {
    return await new NetworkService().callBackendEndpoint({
      method: "post",
      endpoint: "random_nft_for_mint",
      data: { number: data.number },
      headers: {
        authorization: `Bearer ${data.token}`,
      },
    });
  }

  async getNftForUnMint(data) {
    return await new NetworkService().callBackendEndpoint({
      method: "post",
      endpoint: "nft_for_un_mint",
      data: { number: data.number },
      headers: {
        authorization: `Bearer ${data.token}`,
      },
    });
  }

  async getFees() {
    return await new NetworkService().callBackendEndpoint({
      method: "get",
      endpoint: "get_fee",
    });
  }

  async getNftByTokenId(id) {
    return await new NetworkService().callBackendEndpoint({
      method: "get",
      endpoint: `nft/${id}`,
    });
  }

  async generateToken(values) {
    return await new NetworkService().callBackendEndpoint({
      method: "post",
      endpoint: "generate_token",
      data: { accounts: values.accounts },
    });
  }

  // async getNftsImages(page: any) {
  // return await new NetworkService().callBackendEndpoint({
  //   method: "get",
  //   getNftsImages: `/get-nfts-images?page=${page}`,
  // });
  //

  getNftsImages = (page) => {
    return BaseService.get(`${APIPath.getNftsImages}?page=${page}`);
  };
  // }
}

export default NFTService;
