const { WhiteListAddresses } = require("../schema/whiteListAddresses");

const insertAddresses = async (whitelistData: any) => {
  try {
    const { type } = whitelistData;
    const deletePrevious = await WhiteListAddresses.deleteMany();
    if (!deletePrevious) throw "Something went wrong";

    if (deletePrevious) {
      const saved = await WhiteListAddresses.create(whitelistData);

      if (!saved) throw "Addresses not added";

      return saved;
    }
  } catch (error) {
    console.log(error);
    return { error };
  }
};

const findAddress = async (address: string) => {
  try {
    const verified = await WhiteListAddresses.find({
      $and: [{ "addresses.address": address.toLocaleLowerCase() }],
    });

    return verified;
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export { insertAddresses, findAddress };
