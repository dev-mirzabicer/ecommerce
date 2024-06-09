// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Warehouse {
    address public owner;
    mapping(uint => uint) public inventory; // productId => quantity

    event InventoryAdded(uint productId, uint quantity);
    event InventoryRemoved(uint productId, uint quantity);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addInventory(uint productId, uint quantity) public onlyOwner {
        inventory[productId] += quantity;
        emit InventoryAdded(productId, quantity);
    }

    function removeInventory(uint productId, uint quantity) public onlyOwner {
        require(inventory[productId] >= quantity, "Not enough inventory");
        inventory[productId] -= quantity;
        emit InventoryRemoved(productId, quantity);
    }

    function getInventory(uint productId) public view returns (uint) {
        return inventory[productId];
    }
}