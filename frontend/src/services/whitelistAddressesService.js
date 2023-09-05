import NetworkService from "./networkService";

class WhitelistAddressService {
  async saveAddresses(data) {
    return await new NetworkService().callBackendEndpoint({
      method: "post",
      endpoint: "save-addresses",
      data,
      headers: {
        authorization: `Bearer ${data.token}`,
      },
    });
  }

  async verifyAddress(data) {
    return await new NetworkService().callBackendEndpoint({
      method: "get",
      endpoint: "check-address",
      params: data,
    });
  }

  async generateMerkleRoot(data) {
    return await new NetworkService().callBackendEndpoint({
      method: "post",
      endpoint: "generate-merkle-root",
      data: data,
      headers: {
        authorization: `Bearer ${data.token}`,
      },
    });
  }
}

export default WhitelistAddressService;
