const ethers = require("ethers");
const oracleAbi = require("../abi/HoneypotOracle.json");
const {
  NeonEVMtestnet,
  Basetestnet,
  Mantletestnet,
  Celotestnet,
  Lineatestnet,
  ArbitrumTestnet,
  ZkSynctestnet,
  ScrollSepolia,
  zkevmtestnet,
  MUMBAI_80001,
} = require("./provider");

const signHoneypot = async (chain, copyAddress) => {
  const providerNetwork = {
    8001: MUMBAI_80001,
    1101: zkevmtestnet,
    8453: Basetestnet,
    42161: ArbitrumTestnet,
    59144: Lineatestnet,
    42220: Celotestnet,
    534352: ScrollSepolia,
    245022934: NeonEVMtestnet,
    5000: Mantletestnet,
  };

  const contractAddress = {
    1101: "0x4D2bE571FcF739050894594DBa012a04721a1a1E",
    8453: "0xf0f887EB07c214f578ffE554749aDA52ef6E9f5C",
    42161: "0xF3F299290A6E74A0bF6e90F6F3EfD964cBfbE3DC",
    59144: "0xF3F299290A6E74A0bF6e90F6F3EfD964cBfbE3DC",
    42220: "0xF3F299290A6E74A0bF6e90F6F3EfD964cBfbE3DC",
    534352: "0xF3F299290A6E74A0bF6e90F6F3EfD964cBfbE3DC",
    245022934: "0xF3F299290A6E74A0bF6e90F6F3EfD964cBfbE3DC",
    5000: "0xF3F299290A6E74A0bF6e90F6F3EfD964cBfbE3DC",
    80001: "0xf3f299290a6e74a0bf6e90f6f3efd964cbfbe3dc",
  };

  const Honeypot = new ethers.Contract(
    contractAddress[chain],
    oracleAbi,
    providerNetwork[chain]
  );

  const privateKey =
    "8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb62";

  const wallet = new ethers.Wallet(privateKey, providerNetwork[chain]);

  // Connect the wallet to the Honeypot contract
  const connectedHoneypot = Honeypot.connect(wallet);

  // Call the setHoneypot function
  try {
    const parsedChain = ethers.parseEther(chain.toString());
    let recieverChain;
    if (chain === 80001) recieverChain = 534352;
    else recieverChain = 80001;
    const tx = await connectedHoneypot.InterstellarShout(
      parsedChain,
      recieverChain,
      copyAddress
    );

    // Wait for the transaction to be mined
    await tx.wait();

    console.log("InterstellarShout function called successfully!");
  } catch (error) {
    const tx = await connectedHoneypot.setHoneypot(copyAddress);
    await tx.wait();
    console.log("setHoneypot function called successfully!");
  }
};
module.exports = {
  signHoneypot,
};
