# ZKAgeCheck

ZKAgeCheck is a smart contract deployed on the [zkSync](https://docs.zksync.io/) blockchain, designed to simulate a Zero-Knowledge (ZK) proof for age verification.
The contract allows users to prove they are over 18 years old without revealing their actual birth year, enhancing privacy in age-restricted applications.

This is a project for the **ZK and Scaling Bootcamp Q4 2024** organized by the [Encode Club](https://www.encode.club/zk-scaling-bootcamp)

- **Verify Age**: Allows users to prove they are over 18 by verifying their hashed birth year and a ZK proof.
- **Preserve Privacy**: Uses cryptographic hashing and Zero-Knowledge proofs to ensure privacy.
- **Emit Event**: Emits an `AgeVerified` event indicating whether the user is over 18 or not.

- - - 

- The contract takes two parameters:
  - `hashedYear`: A hash of the user's birth year (e.g., `keccak256(abi.encodePacked(year))`).
  - `providedHash`: A cryptographic proof that the user is over 18.
  
- The contract checks whether the user is over 18 by comparing the `hashedYear` with a threshold value (`2006` for the year 2024) and verifying the provided hash.

## Installation & Deployment

1. Install dependencies and configure the `zksync-cli` or use any Ethereum-compatible deployment tool.
2. Deploy the contract to the zkSync Sepolia Testnet or your desired network.

