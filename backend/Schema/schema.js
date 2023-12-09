const mongoose = require("mongoose");

const LPschema = new mongoose.Schema({
  LPsAddress: { type: String, index: { unique: true } },
  ChainID: Number,
  token0: String,
  token1: String,
  Lpnumber: Number,
});
const LPModel = mongoose.model("LPModel", LPschema);

module.exports = { LPModel };
