// https://eth-ropsten.alchemyapi.io/v2/n1ZLmhZLyyeQlWEKETn6z7ybUp-KdDrD

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/n1ZLmhZLyyeQlWEKETn6z7ybUp-KdDrD`,
      accounts: [ '995477081152131a433b54791cc17aab07fa2023ed15a4d8fce5e63e3c6a4f08' ]
    }
  }
}
