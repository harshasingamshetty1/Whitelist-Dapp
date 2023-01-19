import { ethers } from "hardhat";

async function main() {
  const whitelistFactory = await ethers.getContractFactory("Whitelist");
  const maxWhitelists = 10;
  const whitelistContract = await whitelistFactory.deploy(maxWhitelists);
  await whitelistContract.deployed();

  console.log(
    `Whitelist contract with max ${maxWhitelists} whitelists deployed to ${whitelistContract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
