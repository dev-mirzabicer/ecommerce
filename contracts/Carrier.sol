// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Warehouse.sol";
import "./Customer.sol";

contract Carrier {
    address public owner;

    event ProductShipped(uint productId, uint quantity, address customer);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function shipProduct(uint productId, uint quantity, address customer, address warehouseAddress) public onlyOwner {
        Warehouse warehouse = Warehouse(warehouseAddress);
        require(warehouse.getInventory(productId) >= quantity, "Not enough inventory");
        warehouse.removeInventory(productId, quantity);
        emit ProductShipped(productId, quantity, customer);
    }
}
