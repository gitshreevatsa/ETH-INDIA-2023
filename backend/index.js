const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { getToken } = require("./utils/getToken");
const { getUsers } = require("./utils/addresses");
const { tokenHolders } = require("./utils/tokenHolderChecker");
const { ganacheConnection } = require("./utils/ganache");
const { fetchTokenDetails } = require("./utils/fetchERCDetails");
const { funding } = require("./utils/funding");
const { populateEther } = require("./utils/populateEther");
const db = require("./Schema/db");
const { tokenTax } = require("./utils/tokenTax");
const poolAbi = require("./abi/Pool.json");
const { signHoneypot } = require("./utils/contractCall");
const ethers = require("ethers");

const app = express();
db;
app.use(cors());
app.use(bodyParser.json());
app.options("*", cors());

const port = 5005;

app.get("/:id/:chain", async (req, res) => {
  const { id, chain } = req.params;
  console.log(id, chain);

  const tokenDetails = await getToken(id);
  console.log(tokenDetails);
  if (tokenDetails === null) {
    res.status(404).json({ message: "Token not found" });
    return;
  }

  const token0Holders = await getUsers(
    tokenDetails.token0,
    tokenDetails.ChainID,
    undefined
  );
  const token1Holders = await getUsers(
    tokenDetails.token1,
    tokenDetails.ChainID,
    token0Holders.eoaHolders
  );

  const tokens = [
    tokenDetails.token0.toLowerCase(),
    tokenDetails.token1.toLowerCase(),
  ];
  console.log(tokens);

  const tokenHolderChecker = await tokenHolders(
    token0Holders.eoaHolders,
    token1Holders.eoaHolders
  );

  console.log(tokenHolderChecker);

  const ganacheConnect = await ganacheConnection(
    chain,
    tokenHolderChecker.base_address_holder,
    tokenHolderChecker.quote_address_holder,
    id
  );
  console.log(ganacheConnect);

  await funding(ganacheConnect.web3, tokenHolderChecker.base_address_holder);
  await funding(ganacheConnect.web3, tokenHolderChecker.quote_address_holder);

  // handler for getting reserves
  const LP = new ganacheConnect.web3.eth.Contract(
    poolAbi,
    tokenDetails.LPsAddress
  );
  const reserves = await LP.methods.getReserves().call();

  const token0 = await fetchTokenDetails(
    ganacheConnect.web3,
    tokenDetails.token0
  );

  const token1 = await fetchTokenDetails(
    ganacheConnect.web3,
    tokenDetails.token1
  );

  await populateEther(
    tokenHolderChecker.base_address_holder,
    tokenHolderChecker.quote_address_holder,
    token0,
    token1
  );

  try {
    taxCalc = await tokenTax(
      ganacheConnect.web3,
      ganacheConnect.swapRouterContract,
      tokenDetails.token0,
      tokenDetails.token1,
      tokenHolderChecker.base_address_holder,
      tokenHolderChecker.quote_address_holder,
      1,
      true,
      300000,
      1000000000,
      tokenHolderChecker,
      token0,
      token1
    );
    console.timeEnd("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!UNISWAP INTERACTION : ");

    console.log(taxCalc, "taxCalc");
    let isHoneyPot, error;
    if (
      taxCalc.buyTaxPercentage == undefined ||
      taxCalc.sellTaxPercentage == undefined ||
      // taxCalc.approve_error == undefined ||
      taxCalc.sellTaxPercentage > 60 ||
      taxCalc.buyTaxPercentage > 60
    ) {
      isHoneyPot = true;
      error = "HIGH TAX";
    } else {
      isHoneyPot = false;
    }

    if (taxCalc.approve_error != undefined) {
      isHoneyPot = true;
      error = "APPROVE FAILED";
    }

    if (
      taxCalc.buy_tax_error !== undefined ||
      taxCalc.sell_tax_error !== undefined ||
      taxCalc.approve_error !== undefined
    ) {
      error = "Transfer Failed";
      isHoneyPot = true;
    }

    if (taxCalc.buyTax > 60) {
      isHoneyPot = true;
      buy_tax_error = "High Buy Tax";
      error = "High Buy Tax";
    }

    if (taxCalc.sell_tax > 60) {
      isHoneyPot = true;
      sell_tax_error = "High Sell Tax";
      error = "High Sell Tax";
    }

    if (
      taxCalc.buyTaxPercentage != undefined &&
      taxCalc.sellTaxPercentage != undefined
    ) {
      buy_tax = Math.round(taxCalc.buyTaxPercentage);
      sell_tax = Math.round(taxCalc.sellTaxPercentage);
    }

    if (taxCalc.buyTaxPercentage < 0) {
      buy_tax = 0;
    }
    if (taxCalc.sellTaxPercentage < 0) {
      sell_tax = 0;
    }

    if (taxCalc.buyTaxPercentage === 0 && taxCalc.sellTaxPercentage === 0) {
      isHoneyPot = false;
    }

    if (isHoneyPot === true) {
      await signHoneypot(chain, id);
      console.log("Honeypot signed");
    }

    console.log(reserves, "reserves");
    res.status(200).json({
      data: {
        buy_tax: sell_tax | undefined,
        sell_tax: buy_tax | undefined,
        transfer_tax: ((buy_tax + sell_tax) / 2) | undefined,
        isHoneyPot: isHoneyPot.toString(),
        isHoneyPotReason: [error],
        dex: tokenDetails.LPsAddress,
        pair: [token0.tokenName, token1.tokenName],
        totalHolders: token0Holders.eoaHolders.length,
        tokenName: token0.tokenName,
        tokenReserves: ethers.utils.formatUnits(
          reserves._reserve0,
          token0.decimals
        ),
        counterTokenReserves: ethers.utils.formatUnits(
          reserves._reserve1,
          token1.decimals
        ),
      },
      // totalSupply: await token0.total_supply(),
      // reserves: ethers.utils.formatUnits(reserves, token0.decimals),
    });
  } catch (e) {
    e = e.toString() || e.split(":")[2].trim() + ": " + e.split(":")[3].trim();

    res.json({
      timestamp: Date.now(),
      buy_tax: undefined,
      sell_tax: undefined,
      transfer_tax: undefined,
      isHoneyPot: 1,
      isHoneyPotReason: [e],
      // dex: tokenDetails.LPsAddress,
      tokenName: token0.tokenName,
      pair: [token0.tokenName, token1.tokenName],
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
