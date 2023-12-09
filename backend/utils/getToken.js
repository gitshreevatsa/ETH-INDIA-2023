const { LPModel } = require("../Schema/schema");

const getToken = async (tokenId, chainId) => {
  const token0 = await LPModel.findOne({ token0: tokenId });
  const token1 = await LPModel.findOne({ token1: tokenId });
  const token = token0 || token1;
  return token;
};

module.exports = { getToken };
