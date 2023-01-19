import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();
// import { DotenvConfigOptions } from "dotenv";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "Enter your Private Key";
// console.log(PRIVATE_KEY);
const INFURA_HTTP_URL =
  "https://goerli.infura.io/v3/4de914a314bf4d12b30bfc6c89edca2a";
const MAINNET_RPC_URL_BSC =
  process.env.MAINNET_RPC_URL_BSC || "Provide your RPC endpoint";
const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      // saveDeployments: true,
    },
    goerli: {
      url: INFURA_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
