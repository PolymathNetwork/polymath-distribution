var PolyToken = artifacts.require('./PolyToken.sol');
var PolyDistribution = artifacts.require('./PolyDistribution.sol');

module.exports = async (deployer, network) => {
  //await deployer.deploy(PolyToken);
  await deployer.deploy(PolyDistribution);
};
