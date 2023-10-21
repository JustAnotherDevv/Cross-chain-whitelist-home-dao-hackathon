require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity:  {
    compilers: [
      {
        version: "0.8.7",
      },
      {
        version: "0.7.6",
      }
    ],
    settings: { },
    overrides: {
      "contracts/Operator.sol": {
        version: "0.7.6",
        settings: { }
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};
