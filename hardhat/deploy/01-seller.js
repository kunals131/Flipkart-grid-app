const {network} = require('hardhat');

module.exports = async function({getNamedAccounts,deployments}) {
    const {deploy,log} = deployments;
    const {deployer} = await getNamedAccounts();
    const chainId = network.config.chainId;
    const args = [];
    console.log('deploying...');
    const sellerContract = await deploy("Seller",{
        from : deployer,
        args,
        log : true,
        waitConfirmations : network.config.blockConfirmations || 1
    });

}

