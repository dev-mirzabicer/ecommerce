// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ISeller {
    function createItemList(Item[] memory items) external;
    function verifyPayment(address customer) external;
    function informWarehouse(address customer, uint256[] memory itemIds) external;
}
