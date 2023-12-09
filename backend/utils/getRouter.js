const ethers = require("ethers");
const abi = require("../abi/v2router.json");

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

const providers = {
  8453: BaseMainet,
  42161: ArbitrumMainet,
  1101: zkevmMainet,
  42220: CeloMainet,
  59144: LineaMainet,

  1: eth,
  56: bsc,
  137: polygon,
};

const networkTokens = {
  56: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
  1: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  137: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
};

const getRouter = async (chainId) => {
  const router = new ethers.Contract(
    dexRouters[chainId],
    abi,
    providers[chainId]
  );

  const token0cast = await router.methods.token0().call();
  const token1cast = await router.methods.token1().call();

  const token0 = token0cast.toLowerCase();
  const token1 = token1cast.toLowerCase();
  let tokens = [token0, token1];
  if (tokens[0] == networkTokens[network]) {
    tokens = [token1, token0];
  }

  return { tokens };
};
