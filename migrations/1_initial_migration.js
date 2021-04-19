//var artifacts = require('truffle-artifactor');
const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()
  // Mint 1,000 Dai Tokens for the deployer
  await tokenMock.mint(
    '0x21697F6C62ec4323Fc7e2ce7B81A38F98879497c',
    '1000000000000000000000'
  )
};
