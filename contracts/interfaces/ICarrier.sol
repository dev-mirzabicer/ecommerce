// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ICarrier {
    function receiveItem(address warehouse, address customer, uint256[] memory itemIds) external;
    function submitItem(address customer, uint256[] memory itemIds) external;
}
