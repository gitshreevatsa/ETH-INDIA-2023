require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.21",
  defaultNetwork: "hardhat",
  gasReporter: {
    enabled: true,
  },
  networks: {
    hardhat: {
      accounts: [
        {
          privateKey: "8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb62",
          balance: "1000000000000000000000",
        },
      ],
    },
    mumbai_zkevm: {
      url: "https://rpc.ankr.com/polygon_zkevm_testnet/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c",
      accounts: ["8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb62"],
    },
    mumbai_80001: {
      url: "https://rpc.ankr.com/polygon_mumbai/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c",
      accounts: ["8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb62"],
    },
    scrollSepolia: {
      url: "https://rpc.ankr.com/scroll_sepolia_testnet/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c",
      accounts: ["8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb62"],
    },
    neonEVMtestnet: {
      url: "https://proxy.devnet.neonlabs.org/solana",
      accounts: ["8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb62"],
    },
    basetestnet: {
      url: "https://rpc.ankr.com/base_goerli/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c"
,
      accounts: ["8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb62"],
    },
    arbitrumtestnet: {
      url: "https://sepolia-rollup.arbitrum.io/rpc"
,
      accounts: ["8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb62"],
    },
    lineatestnet: {
      url: "https://rpc.goerli.linea.build"
,
      accounts: ["8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb62"],
    },
    zkSynctestnet: {
      url: "https://testnet.era.zksync.dev"
,
      accounts: ["8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb62"],
    },
    mantletestnet: {
      url: "https://rpc.testnet.mantle.xyz"
,
      accounts: ["8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb62"],
    },
    celotestnet: {
      url: "https://alfajores-forno.celo-testnet.org"
,
      accounts: ["8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb62"],
    },
  },
};
