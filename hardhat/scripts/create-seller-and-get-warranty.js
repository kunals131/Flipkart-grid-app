const { ethers } = require("hardhat");

async function main() {

    const SellerContract = await ethers.getContract("Seller",);
    const tx = await SellerContract.createSeller()

}


main();