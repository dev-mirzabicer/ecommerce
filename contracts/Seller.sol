// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Warehouse.sol";

contract Seller {
    address public owner;
    Warehouse public warehouse;

    event ProductSold(uint productId, uint quantity, address customer);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor(address warehouseAddress) {
        owner = msg.sender;
        warehouse = Warehouse(warehouseAddress);
    }

    function sellProduct(uint productId, uint quantity, address customer) public onlyOwner {
        require(warehouse.getInventory(productId) >= quantity, "Not enough inventory");
        warehouse.removeInventory(productId, quantity);
        emit ProductSold(productId, quantity, customer);
    }
}
