require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/XwK8fXA4PNxpEAKnPBoekPWwHfSjcyUV',
      accounts: ['13c9ca2bf74b39c3572216e5015c3599573fb447d8f3f74f99ef56118f9df7d9'],
    },
  },
};