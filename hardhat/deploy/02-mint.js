const { network, ethers } = require("hardhat");

const metaDataTemplate = {
    name : "",
    description : "",
    image : "",
    attributes : [{
        trait_type : "Cuteness",
        value : 100,
    }]
}


module.exports = async({getNamedAccounts,deployments})=>{
    const {deployer, customer} = await getNamedAccounts();
    const chainId = network.config.chainId;

    let tokenUris = [
        'ipfs://QmYnNHy4NoZxQNBbWzPrbcdzzNxv9R2bLS4RnHmMR6MPTb',
        'ipfs://QmcAYTohjhLJqrPjtasn6EbGDiYGPck1MGcFb5iL9ppnpQ',
        'ipfs://QmbvRqKSQxmNEHRY9o8Tzwvf1BoQb433kfkr5SLpKDgyiz'
      ]

    //create-Seller (Flipkart's job)
    const sellerContract = await ethers.getContract("Seller", deployer);
    const sellerTxt = await sellerContract.createSeller(deployer, "Ins", "INS");
    const sellersWarrantyContractAddress = await sellerContract.getWarrantyContract();
    const sellerWarrantyContract = await ethers.getContractAt("WarrantyNFT", sellersWarrantyContractAddress,customer);


    //buy Customer
    const buyTx = await sellerWarrantyContract.placeOrder('123');
    await buyTx.wait(1);
    console.log(buyTx);

    const mintTx = await sellerWarrantyContract.mintWarrantyNFT(customer,'123',tokenUris[0],tokenUris[1],'12 Dec 2022');
    const mintTxReceipt = await mintTx.wait(1);
    console.log(mintTxReceipt.events[1].args.tokenId.toString());
    





}

const getTokenURIs = ()=>{

}