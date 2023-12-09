const BN = require("bn.js");


let functionJson = {
  swapExactTokensForETHSupportingFeeOnTransferTokens: false,
  swapExactTokensForTokensSupportingFeeOnTransferTokens: false,
  swapExactTokensForETH: false,
  swapExactTokensForTokens: false,
};

let functionError = {
  swapExactTokensForETHSupportingFeeOnTransferTokens: "",
  swapExactTokensForTokensSupportingFeeOnTransferTokens: "",
  swapExactTokensForETH: "",
  swapExactTokensForTokens: "",
};

const baseQuoteCall = async (amountIn, path, routerContract, account, web3) => {
  try {
    await routerContract.methods
      .swapExactTokensForTokensSupportingFeeOnTransferTokens(
        amountIn,
        0,
        path,
        account,
        new BN("99999999999999").toNumber()
      )
      .send({ from: account, gas: 300000 })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    functionJson.swapExactTokensForTokensSupportingFeeOnTransferTokens = true;
    console.log(
      "success in calling swapExactTokensForTokensSupportingFeeOnTransferTokens"
    );
  } catch (err) {
    console.log(err);
    console.log(
      "error in calling swapExactTokensForTokensSupportingFeeOnTransferTokens"
    );
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
      functionJson.swapExactTokensForTokens = true;
      console.log("success in calling swapExactTokensForTokens");
    } catch (err) {
      console.log("error in calling swapExactTokensForTokens");
      functionError.swapExactTokensForTokens = err.message;
      console.log(err);

      try {
        await routerContract.methods
          .swapExactTokensForETHSupportingFeeOnTransferTokens(
            amountIn,
            0,
            path,
            account,
            new BN("99999999999999").toNumber()
          )
          .send({ from: account, gas: 300000 });
        functionJson.swapExactTokensForETHSupportingFeeOnTransferTokens = true;
        console.log(
          "success in calling swapExactTokensForETHSupportingFeeOnTransferTokens"
        );
      } catch (err) {
        console.log(
          "error in calling swapExactTokensForETHSupportingFeeOnTransferTokens"
        );
        functionError.swapExactTokensForETHSupportingFeeOnTransferTokens =
          err.message;
        console.log(err);

        try {
          await routerContract.methods
            .swapExactTokensForETH(
              amountIn,
              0,
              path,
              account,
              new BN("99999999999999").toNumber()
            )
            .send({ from: account, gas: 300000 });
          functionJson.swapExactTokensForETH = true;
          console.log("success in calling swapExactTokensForETH");
        } catch (err) {
          console.log("error in calling swapExactTokensForETH");
          functionError.swapExactTokensForETH = err.message;
          console.log(err);
        }
      }
    }
  }
  let returnJson = {};
  for (const [key, value] of Object.entries(functionJson)) {
    if (value === true) {
      console.log(key, "success");
      returnJson["functionCall"] = key;
      returnJson["error"] = "";
    } else {
      returnJson["error"] = functionError[key];
    }
  }
  return returnJson;
};

module.exports = { baseQuoteCall };
