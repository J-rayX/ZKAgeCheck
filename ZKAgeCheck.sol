// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma solidity ^0.8.24;


contract ZKAgeCheck {
    // threshold year (e.g., 2006 for 18+ in 2024)
    uint256 public constant MIN_YEAR = 2006;
    event AgeVerified(address indexed user, bool isOver18);

    /**
     * @dev Simulates a ZK age check.
     * @param hashedYear Hash of the user's birth year (e.g., keccak256(abi.encodePacked(year))).
     * @param providedHash Hash that proves the user is over 18.
     */
    function verifyAge(bytes32 hashedYear, bytes32 providedHash) public {
        bytes32 thresholdHash = keccak256(abi.encodePacked(MIN_YEAR));
        bool isOver18 = (hashedYear <= thresholdHash) && (providedHash == keccak256(abi.encodePacked(hashedYear, MIN_YEAR)));

        emit AgeVerified(msg.sender, isOver18);
    }
}
