const axios = require("axios");
const { apiCall } = require("./apiCall");

const Ankr_Chain_Mapping = {
  1: "eth",
  56: "bsc",
  137: "polygon",

  8453: "base",
  42161: "arbitrum",
  1101: "polygon_zkevm",
  59144: "linea",
  42220: "celo",

  245022934: "neon",
  534352: "scroll",
  324: "zksync",
  5000: "mantle",
};

const getUsers = async (tokenId, chain, copyAddress) => {
  console.log(copyAddress);

  let eoaHolders = new Array();

  const url = `https://rpc.ankr.com/multichain/79258ce7f7ee046decc3b5292a24eb4bf7c910d7e39b691384c7ce0cfb839a01/?ankr_getTokenHolders=`;

  const body = {
    jsonrpc: "2.0",
    method: "ankr_getTokenHolders",
    params: {
      blockchain: Ankr_Chain_Mapping[chain],
      contractAddress: tokenId,
    },
    id: 1,
  };

  let tokenHolderInformation = await apiCall(url, "POST", body);

  console.log(tokenHolderInformation, "tokenHolderInformation");

  let addressHolders = tokenHolderInformation.result.holders;
  if (addressHolders === undefined) {
    eoaHolders.push("0x0000000000000000000000000000000000000000");
    console.log("holders are pushed here");
  } else if (addressHolders) {
    console.log("ADDRESSES HOLDING");
    await addressHolders?.forEach((element) => {
      if (element["balance"] > "0.001" && eoaHolders.length < 20) {
        eoaHolders.push(element["holderAddress"]);
      }
    });
  }

  if (copyAddress === undefined) {
    copyAddress = [];
  }

  if (copyAddress !== undefined) {
    console.log("COPY ADDRESS IS NOT UNDEFINED");
    console.log(copyAddress);
    console.log(eoaHolders);
    eoaHolders = eoaHolders.filter((item) => !copyAddress.includes(item));
    console.log(eoaHolders);
  }

  return { eoaHolders };
};

module.exports = { getUsers };
