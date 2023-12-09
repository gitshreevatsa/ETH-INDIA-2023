
async function main() {

  const Oracle = await hre.ethers.deployContract("HoneypotOracle");

  await Oracle.waitForDeployment();

  console.log(
    `oracle deployed to ${Oracle.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
