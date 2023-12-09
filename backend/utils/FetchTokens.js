
const ethers = require("ethers");
const { QuickNode } = require("./provider.js");
const poolabi = require("../abi/Pool.json");
const Factoryabi = require("../abi/v2factory.json");
const {LPModel} = require("../Schema/schema.js");
const db = require("../Schema/db");

const FetchTokenDetails = async () => {
  const Factorycontract = new ethers.Contract(
    "0x62d5b84bE28a183aBB507E125B384122D2C25fAE",
    Factoryabi,
    QuickNode
  );
const chainID=((await QuickNode.getNetwork()).chainId);
console.log(chainID);
  const pairCount = await Factorycontract.allPairsLength();

  console.log(pairCount);
  for (let i = 0; i < pairCount; i++) {
    const LPsAddress = await Factorycontract.allPairs(i);
    const Poolcontract = new ethers.Contract(
      LPsAddress,
      poolabi,
      QuickNode
    );
    const token0 = await Poolcontract.token0();
    const token1 = await Poolcontract.token1();

    // Create a document to be inserted into the MongoDB collection
    const lpData = new LPModel({
        LPsAddress: LPsAddress,
        ChainID: chainID,
        token0: token0,
        token1: token1,
        Lpnumber: i
    });

    // Save the document to the MongoDB collection
    try {
      await lpData.save();
      console.log(`LP data saved for LP at address: ${LPsAddress}`);
    } catch (err) {
      console.error(err);
    }
  }
};

FetchTokenDetails();
