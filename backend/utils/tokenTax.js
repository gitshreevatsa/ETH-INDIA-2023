const BN = require("bn.js");
const { baseQuoteCall } = require("./baseQuoteTest");
const { quoteBaseCall } = require("./quoteBaseTest");

// YET TO WORK ON THIS
// add transferring here and return

const tokenTax = async (
  web3, // web3 instance: ganache hard fork
  router, // router contract
  base_token_address, // base token address
  quote_token_address, // quote token address
  buy_account, // ganache account
  sell_account, // ganache account
  buy_amount,
  approve,
  gas_limit,
  gas_price,
  balances,
  token0,
  token1
) => {
  approve = true;
  const Web3 = web3;
  const routerContract = router;

  console.log(
    quote_token_address,
    base_token_address,
    buy_account,
    sell_account,
    buy_amount,
    "======================================================================"
  );

  const quote_token_details = token1;
  const quote_token = quote_token_details.contract;

  const base_token_details = token0;
  const base_token = base_token_details.contract;
  let tx_params, buyTaxPercentage, sellTaxPercentage;

  if (gas_limit) {
    tx_params = {
      gas: gas_limit,
      gasPrice: gas_price,
    };
  } else {
    tx_params = {};
  }
  let buyTax = 0.0;
  console.log(
    await quote_token.methods.balanceOf(routerContract._address).call(),
    "router balance of ",
    quote_token_details.tokenName,

    "======================================================================",

    await base_token.methods.balanceOf(routerContract._address).call(),
    "router balance of ",
    base_token_details.tokenName
  );

  console.log(
    "Buy Account and Quote token:",
    quote_token_details.tokenName,

    await quote_token.methods.balanceOf(buy_account).call(),
    "Sell account and Base token:",
    base_token_details.tokenName,

    await base_token.methods.balanceOf(sell_account).call(),
    "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
  );

  console.log(
    "Buy Account and Base token",
    await base_token.methods.balanceOf(buy_account).call(),
    "Sell account and Quote token",
    await quote_token.methods.balanceOf(sell_account).call(),
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"
  );

  let buy_tax_error, sell_tax_error, approve_error;

  console.log(await web3.eth.getBalance(buy_account), "buy account balance");
  console.log(await web3.eth.getBalance(sell_account), "sell account balance");

  try {
    await quote_token.methods
      .approve(
        routerContract._address,
        await quote_token.methods.balanceOf(sell_account).call()
      )
      .send({ from: sell_account });
    console.log("approved quote token from", sell_account);
    await base_token.methods
      .approve(
        routerContract._address,
        await base_token.methods.balanceOf(buy_account).call()
      )
      .send({ from: buy_account });
    console.log("approved base token from", buy_account);
  } catch (err) {
    console.log("error in approving quote token");
    console.log(err);
    approve_error = err.message;
    // return approve_error;
  }

  console.log(
    "=============================",
    await base_token.methods
      .allowance(buy_account, routerContract._address)
      .call(),
    "============================="
  );

  console.log(
    "=============================",
    await quote_token.methods
      .allowance(sell_account, routerContract._address)
      .call(),
    "============================="
  );

  let path = [base_token._address, quote_token._address];

  let amountIn = await base_token.methods.balanceOf(buy_account).call();
  console.log("amount in", amountIn);

  // console.warn(await quote_token.methods.balanceOf(buy_account).call());
  /**
   * Buy Tax
   */
  let uniswap_price = await routerContract.methods
    .getAmountsOut(amountIn, path)
    .call();
  let baseQuote;
  try {
    baseQuote = await baseQuoteCall(amountIn, path, router, buy_account, web3);
  } catch (e) {
    console.log(e);
  }

  console.log(baseQuote, "base quote");

  if (baseQuote.error !== "") {
    buy_tax_error = baseQuote.error;
    console.log("STOPPING HERE");
  }
  const receivedAmount = await quote_token.methods
    .balanceOf(buy_account)
    .call();

  console.log("Received amount", receivedAmount);

  if (uniswap_price[0] == amountIn) {
    console.error("Correct input amount", amountIn, uniswap_price[0]);
  }

  buyTax = (uniswap_price[1] - receivedAmount) / uniswap_price[1];
  console.log("Buy Tax", buyTax);
  if (isNaN(buyTax)) {
    buyTax = 1;
  }

  console.log(uniswap_price);

  console.log(
    receivedAmount,
    " - Recieved amount",
    uniswap_price[1],
    " - Uniswap price"
  );

  console.log("Buy Tax Percentage", buyTax * 100, "%");

  /**
   * Sell Tax
   */
  console.log(quote_token_details.tokenName, "quote token name");

  let newpath = [quote_token._address, base_token._address];
  let recieved_amount_by_seller = await quote_token.methods
    .balanceOf(sell_account)
    .call();

  console.log("recieved amount by seller : ", recieved_amount_by_seller);

  let sell_tax = 0.0;

  let uniswap_price_erc = await router.methods
    .getAmountsOut(recieved_amount_by_seller, newpath)
    .call();

  let uniswap_price_native = await router.methods
    .getAmountsOut("0x" + new BN("10000000000000000", 10).toString(16), newpath)
    .call();

  let quoteBase;
  try {
    quoteBase = await quoteBaseCall(
      recieved_amount_by_seller,
      newpath,
      router,
      sell_account,
      quote_token_details,
      web3
    );
  } catch (e) {
    console.log(e);
  }

  if (quoteBase.nativeERC.erc === true) {
    console.log("erc");
    uniswap_price = uniswap_price_erc;
  } else if (quoteBase.nativeERC.native === true) {
    console.log("native");
    uniswap_price = uniswap_price_native;
  }

  if (quoteBase.error === "") {
    sell_tax_error = quoteBase.error;
  } else {
    const recieved_Base_Amount = await base_token.methods
      .balanceOf(sell_account)
      .call();

    console.log("recieved base amount", recieved_Base_Amount);
    console.log("uniswap price", uniswap_price);
    console.log(
      "uniswap price of base token",
      await base_token_details.convertToDecimals(uniswap_price[1])
    );
    console.log(
      "Base token decimals",
      await base_token_details.convertToDecimals(recieved_Base_Amount)
    );

    sell_tax = (uniswap_price[1] - recieved_Base_Amount) / uniswap_price[1];
    if (isNaN(sell_tax)) sell_tax = 1;
    console.log("sell tax", sell_tax);
    sellTaxPercentage = sell_tax * 100;
    console.log("sell tax percentage", sellTaxPercentage);

    buyTaxPercentage = buyTax * 100;
    sellTaxPercentage = sell_tax * 100;
    console.log("buy tax %", buyTax * 100);
    console.log("sell tax %", sell_tax * 100);
  }
  console.log(await web3.eth.getBalance(sell_account), "sell account balance");
  // const transferTax = await transferTest(sell_account, base_token_details);

  // let transferReturn = transferTax.transferTax;
  // let transferError = transferTax.transferError;
  return {
    buyTaxPercentage,
    sellTaxPercentage,
    buy_tax_error,
    sell_tax_error,
    // transferReturn,
    // transferError,
  };
};

module.exports = { tokenTax };
