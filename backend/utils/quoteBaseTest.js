const BN = require("bn.js");


let functionJson = {
  swapExactETHForTokensSupportingFeeOnTransferTokens: false,
  swapExactTokensForTokensSupportingFeeOnTransferTokens: false,
  swapETHForExactTokens: false,
  swapExactTokensForTokens: false,
};

let functionError = {
  swapExactETHForTokensSupportingFeeOnTransferTokens: "",
  swapExactTokensForTokensSupportingFeeOnTransferTokens: "",
  swapETHForExactTokens: "",
  swapExactTokensForTokens: "",
};

let nativeERC = {
  native: false,
  erc: false,
};
const quoteBaseCall = async (
  amountIn,
  path,
  routerContract,
  account,
  quoteToken,
  web3
) => {
  console.log(
    await web3.eth.getBalance(account),
    " &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"
  );

  try {
    await routerContract.methods
      .swapExactTokensForTokensSupportingFeeOnTransferTokens(
        amountIn,
        0,
        path,
        account,
        new BN("99999999999999").toNumber()
      )
      .send({ from: account, gas: 300000 });
    console.log(
      "success in calling swapExactTokensForTokensSupportingFeeOnTransferTokens"
    );
    functionJson.swapExactTokensForTokensSupportingFeeOnTransferTokens = true;
    nativeERC.erc = true;
  } catch (err) {
    console.log(
      "error in calling swapExactTokensForTokensSupportingFeeOnTransferTokens"
    );
    console.log(err.message);
    functionError.swapExactTokensForTokensSupportingFeeOnTransferTokens =
      err.message;

    try {
      await routerContract.methods
        .swapExactTokensForTokens(
          amountIn,
          0,
          path,
          account,
          new BN("99999999999999").toNumber()
        )
        .send({ from: account, gas: 300000 });
      console.log("success in calling swapExactTokensForTokens");
      functionJson.swapExactTokensForTokens = true;
      nativeERC.erc = true;
    } catch (err) {
      console.log("error in calling swapExactTokensForTokens");
      console.log(err.message);
      functionError.swapExactTokensForTokens = err.message;
      try {
        console.log(await quoteToken.fetchBalanceOf(account));

        await routerContract.methods
          .swapExactETHForTokensSupportingFeeOnTransferTokens(
            0,
            path,
            account,
            new BN("99999999999999").toNumber()
          )
          .send({
            from: account,
            gas: 300000,
            value:
            "0x" + new BN("10000000000000000", 10).toString(16)
          });
        console.log(
          "success in calling swapExactETHForTokensSupportingFeeOnTransferTokens"
        );
        functionJson.swapExactETHForTokensSupportingFeeOnTransferTokens = true;
        nativeERC.native = true;
      } catch (err) {
        console.log(
          "error in calling swapExactETHForTokensSupportingFeeOnTransferTokens"
        );
        console.error(err.message);
        functionError.swapExactETHForTokensSupportingFeeOnTransferTokens =
          err.message;
        try {
          await routerContract.methods
            .swapETHForExactTokens(
              0,
              path,
              account,
              new BN("99999999999999").toNumber()
            )
            .send({
              from: account,
              gas: 300000,
              value:
              "0x" + new BN("10000000000000000", 10).toString(16)
            });
          console.log("success in calling swapETHForExactTokens");
          functionJson.swapETHForExactTokens = true;
          nativeERC.native = true;
        } catch (err) {
          console.log("error in calling swapETHForExactTokens");
          console.error(err.message);
          functionError.swapETHForExactTokens = err.message;
        }
      }
    }
  }
  let returnJson = {};
  for (const [key, value] of Object.entries(functionJson)) {
    if (value) {
      returnJson["functionCall"] = key;
      returnJson["error"] = "";
    } else {
      returnJson["error"] = functionError[key];
    }
  }

  return { returnJson, nativeERC };
};

module.exports = { quoteBaseCall };

// 29020277602760000000
// 29020277602760000000
