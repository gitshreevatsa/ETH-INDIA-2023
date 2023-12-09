const Web3 = require("web3");
const ganache = require("ganache");
const abi = require("../abi/v2router.json");
const ethers = require("ethers");
const tokenContract = require("../abi/erc20.json");

const {
  ScrollMainet,
  BaseMainet,
  ArbitrumMainet,
  zkevmMainet,
  LineaMainet,
  CeloMainet,
  eth,
  polygon,
  bsc,
} = require("./provider");

const networkOptions = {
  8453: "https://rpc.ankr.com/base/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c",
  42161:
    "https://rpc.ankr.com/arbitrum/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c",
  1101: "https://rpc.ankr.com/polygon_zkevm/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c",
  42220:
    "https://rpc.ankr.com/celo/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c1",
  59144: "https://1rpc.io/linea",

  1: "https://rpc.ankr.com/eth",
  56: "https://rpc.ankr.com/bsc",
  137: "https://rpc.ankr.com/polygon/7906078e674202ad67a7d9560d1ee305a91251a9e95a6046dbaeb7e64d2023bd",
};

const dexRouters = {
  8453: "0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb",
  42161: "0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb",
  1101: "0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb",
  42220: "0xE3D8bd6Aed4F159bc8000a9cD47CffDb95F96121",
  59144: "0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb",
  56: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
  1: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  137: "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
};

const ganacheConnection = async (network, buy_account, sell_account, id) => {
  let options = {
    fork: networkOptions[network],
    wallet: {
      unlockedAccounts: [
        buy_account,
        sell_account,
        id,
        "0x0000000000000000000000000000000000000000",
      ],
    },
  };
  let ganacheProvider;
  let web3;
  let swapRouterContract;

  try {
    console.log(networkOptions[network]);
    ganacheProvider = ganache.provider(options);

    web3 = new Web3(ganacheProvider);
    // console.log(web3, "web3");
    swapRouterContract = new web3.eth.Contract(abi.abi, dexRouters[network]);
    // const testErcContract = new web3.eth.Contract(tokenContract.abi, id);
    // console.log("TEST ERC CONTRACT", testErcContract);
    // console.log(await testErcContract.methods.owner().call());
    // console.log(
    //   await testErcContract.methods.issue(
    //     sell_account,
    //     ethers.utils.parseEther("1")
    //   )
    // );
    console.log(swapRouterContract._address, "swapRouterContract._address");
    console.log("Ganache Connection extended");
  } catch (e) {
    console.log("Ganache Connection failed");
    console.log(e);
  }
  return { web3, swapRouterContract };
};

module.exports = { ganacheConnection };
