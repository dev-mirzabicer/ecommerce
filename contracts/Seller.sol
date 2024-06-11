// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Warehouse.sol";
import "./Bank.sol";

contract Seller {
    address public owner;
    Warehouse public warehouse;
    Bank public bank;

    event ProductSold(uint productId, uint quantity, address customer, uint amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor(address warehouseAddress, address bankAddress) {
        owner = msg.sender;
        warehouse = Warehouse(warehouseAddress);
        bank = Bank(bankAddress);
    }

    function sellProduct(uint productId, uint quantity, address customer) public onlyOwner {
        require(warehouse.getInventory(productId) >= quantity, "Not enough inventory");
        warehouse.removeInventory(productId, quantity);
        emit ProductSold(productId, quantity, customer, bank.getBalance(customer));
    }
}
