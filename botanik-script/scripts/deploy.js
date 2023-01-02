const { hre, ethers, run } = require("hardhat");
async function main() {

    const botanik = await ethers.getContractFactory("TAPERAJUNGLE");
    console.log("Deploying TAPERAJUNGLE contract");
    const nft = await botanik.deploy("Name","Symbol"); // replace name and symbol params with desired params
    await nft.deployed();
    console.log("TAPERAJUNGLE contract deployed to:", nft.address);
    console.log("Now verifying TAPERAJUNGLE contract");
    const WAIT_BLOCK_CONFIRMATIONS = 6;
    await nft.deployTransaction.wait(WAIT_BLOCK_CONFIRMATIONS);
    await run(`verify:verify`, {
        address: nft.address,
        constructorArguments: ["Name","Symbol"],
    });
    console.log("TAPERAJUNGLE contract verified");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
