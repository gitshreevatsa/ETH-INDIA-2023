const populateEther = async (
    buy_account,
    sell_account,
    baseTokenDetails,
    quoteTokenDetails
  ) => {
    // Checking whether we have our accounts from web3 instance unlocked, they will be present in n,n-1,n-2 positions of the array
    // console.log(
    //   await web3.eth.getAccounts(),
    //   "??????????????????????????????????????????????????????????????????????"
    // );
    // Checking whether control flow is with right token address and fetching token details

    // 0xAAC79BBe2EB28BEe33Cb568fcB06910d35d8328E
    // console.log(base_token, quote_token, "+++++++++++++++++");
    // console.log(buy_account, sell_account, "+++++++++++++++++");
    const base_token_details = baseTokenDetails;
    const quote_token_details = quoteTokenDetails;
    // Checking initial balances of the accounts

    const buy_account_balance = await quote_token_details.contract.methods
      .balanceOf(buy_account)
      .call();

    const sell_account_balance = await base_token_details.contract.methods
      .balanceOf(sell_account)
      .call();

    console.log(buy_account_balance, sell_account_balance, "+++++++++++++++++");

    let quote_token_transfer_error, base_token_transfer_error;

    if (buy_account_balance !== "0") {
      console.log("Accounts already funded with quote token");
      try {
        await quote_token_details.contract.methods
          .transfer(
            "0xA93F74309D5631EbbC1E42FD411250A6b6240a69",
            buy_account_balance
          )
          .send({ from: buy_account });
      } catch (e) {
        console.log(e);
        quote_token_transfer_error = e.messge;
      }
    }

    if (sell_account_balance !== "0") {
      console.log("Accounts already funded with base token");
      console.log(sell_account_balance, "sell_account_balance");
      try {
        await base_token_details.contract.methods
          .transfer(
            "0xA93F74309D5631EbbC1E42FD411250A6b6240a69",
            sell_account_balance
          )
          .send({ from: sell_account });
      } catch (e) {
        console.log(e);
        base_token_transfer_error = e.messge;
      }
    }

    console.log(
      await quote_token_details.contract.methods.balanceOf(buy_account).call(),
      await base_token_details.contract.methods.balanceOf(sell_account).call(),

      "INITIAL BALANCES"
    );

    console.log(
      await base_token_details.contract.methods.balanceOf(buy_account).call(),
      "BASE TOKEN : BUY ACCOUNT"
    );

    console.log(
      await quote_token_details.contract.methods.balanceOf(sell_account).call(),
      "QUOTE TOKEN : SELL ACCOUNT"
    );
    return { base_token_transfer_error, quote_token_transfer_error };
  };

  module.exports = { populateEther };