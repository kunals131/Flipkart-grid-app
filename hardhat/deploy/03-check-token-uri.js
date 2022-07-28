const { network, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");




module.exports = async({getNamedAccounts,deployments})=>{
    const {deployer} = await getNamedAccounts();
    const chainId = network.config.chainId;
    const {log} = deployments;

    const contract = await ethers.getContractAt('WarrantyNFT', "0x123107686124507b32999Fb80e99AAB8dB77f93d", deployer);
    const fetchedURI = await contract.tokenURI(1);
    log('-----------------fetched URI------------------------')
    log(fetchedURI);

}



module.exports.tags = ['test']; 