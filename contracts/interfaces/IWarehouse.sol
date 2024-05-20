// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IWarehouse {
    function receiveOrder(address seller, address customer, uint256[] memory itemIds) external;
    function sendItems(address carrier, address customer, uint256[] memory itemIds) external;
    function handleItems(address customer, uint256[] memory itemIds) external;
}
