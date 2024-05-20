// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ICustomer {
    function createBasket(uint256[] memory itemIds) external;
    function pay() external payable;
    function receiveItems() external;
}
