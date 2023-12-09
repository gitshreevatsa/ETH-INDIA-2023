const tokenHolders = async (

  baseAddressHolders,
  quoteAddressHolders,

) => {
  let i = 0;
  let base_address_holder = baseAddressHolders[1];
  let quote_address_holder = quoteAddressHolders[1];
  // const baseTokenDetails = await fetchTokenDetails(web3, tokens[0]);
  // const quoteTokenDetails = await fetchTokenDetails(web3, tokens[1]);

  if (baseAddressHolders.length > 1) {
    while (
      base_address_holder == "0x0000000000000000000000000000000000000000" ||
      base_address_holder == "0x000000000000000000000000000000000000dead"
    ) {
      i++;
      base_address_holder = baseAddressHolders[i];
    }
  }

  let j = 0;
  if (quoteAddressHolders.length > 1) {
    while (
      quote_address_holder == "0x0000000000000000000000000000000000000000" ||
      quote_address_holder == "0x000000000000000000000000000000000000dead"
    ) {
      j++;
      quote_address_holder = quoteAddressHolders[j];
    }
  }


  return {
    base_address_holder,
    quote_address_holder,
  };
};

module.exports = { tokenHolders };