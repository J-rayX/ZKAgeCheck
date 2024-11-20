import { ethers } from "ethers";
import { deployContract, getWallet } from "../../utils";
import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function (hre: HardhatRuntimeEnvironment) {
  const contractArtifactName = "ZKAgeCheck";

  const zkAgeCheck = await deployContract(contractArtifactName);
  console.log(`🛡️ ZKAgeCheck deployed at: ${zkAgeCheck.target}`);

  const contractArtifact = await hre.artifacts.readArtifact(
    contractArtifactName
  );
  const zkAgeCheckContract = new ethers.Contract(
    zkAgeCheck.target,
    contractArtifact.abi,
    getWallet()
  );

  console.log("✅ Deployment successful!");

  const testYear = 2000;
  const hashedYear = ethers.keccak256(ethers.toUtf8Bytes(testYear.toString())); 
  const providedHash = ethers.keccak256(
    ethers.toUtf8Bytes(`${hashedYear}${2006}`) 
  );

  console.log("⚙️ Testing the ZKAgeCheck contract...");

  const tx = await zkAgeCheckContract.verifyAge(hashedYear, providedHash);
  await tx.wait();

  console.log("🎉 Age verification transaction completed!");

  zkAgeCheckContract.on("AgeVerified", (user, isOver18) => {
    console.log(`User: ${user}, is over 18: ${isOver18}`);
  });
}
