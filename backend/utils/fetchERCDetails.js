const web3 = require("web3");
const { ethers } = require("ethers");

class TokenDetails {
  contract;
  tokenName;
  symbol;
  total_supply;
  decimals;

  getUnits = (unit) => {
    const units = {
      0: "wei",
      3: "kwei",
      6: "mwei",
      9: "gwei",
      12: "szabo",
      15: "finney",
      18: "ether",
    };
    return units[unit];
  };

  constructor(contract, tokenName, decimals) {
    this.contract = contract;
    this.tokenName = tokenName;
    // this.symbol = symbol;
    // this.total_supply = total_supply;
    this.decimals = decimals;
  }

  getAddress = () => {
    return this.contract.address;
  };

  convertToDecimals = (amount) => {
    return amount / 10 ** this.decimals;
  };

  convertToRaw = (amount) => {
    return ethers.parseUnits(amount.toString(), this.getUnits(this.decimals));
  };

  fetchBalanceOf = async (address) => {
    var raw_amount = await this.contract.methods.balanceOf(address).call();
    return this.convertToDecimals(raw_amount);
  };
}

// /**
//  *
//  * @param {WEB3} web3 web3 instance
//  * @param {Address} address token address
//  * @returns {TokenDetails} token details
//  */

const fetchTokenDetails = async (web3, address) => {
  const token_address = address;
  // Constructing the ERC contract of a token
  const erc20 = new web3.eth.Contract(
    require("../abi/erc20.json").abi,
    token_address,
  );

  const tokenName = await erc20.methods.name().call();

  // const symbol = await erc20.methods.symbol().call();

  const decimals = await erc20.methods.decimals().call();

  const supply = await erc20.methods.totalSupply().call();

  console.log(
    tokenName,
    // symbol,
    decimals,
    supply,
    "--------------------------------"
  );

  return new TokenDetails(erc20, tokenName, decimals, supply);
};

module.exports = { fetchTokenDetails, TokenDetails };
