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
    const {deployer} = await getNamedAccounts();
    const chainId = network.config.chainId;

    let tokenUris = [
        'ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4',
        'ipfs://QmcAYTohjhLJqrPjtasn6EbGDiYGPck1MGcFb5iL9ppnpQ',
        'ipfs://QmbvRqKSQxmNEHRY9o8Tzwvf1BoQb433kfkr5SLpKDgyiz'
      ]

    //create-Seller (Flipkart's job)
    const sellerContract = await ethers.getContract("Seller", deployer);
    const sellerTxt = await sellerContract.createSeller(deployer, "Ins", "INS", {gasLimit : "5000000"});
    const sellersWarrantyContractAddress = await sellerContract.getWarrantyContract({gasLimit : "5000000"});
    const sellerWarrantyContract = await ethers.getContractAt("WarrantyNFT", sellersWarrantyContractAddress,deployer);


    //buy deployer
    const buyTx = await sellerWarrantyContract.placeOrder('123', {gasLimit : "5000000"});
    await buyTx.wait(1);
    console.log(buyTx);

    const mintTx = await sellerWarrantyContract.mintWarrantyNFT(deployer,'123',tokenUris[0],tokenUris[1],'12 Dec 2022', {gasLimit : "5000000"});






}

const getTokenURIs = ()=>{

}