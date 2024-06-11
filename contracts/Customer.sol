// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Seller.sol";
import "./Bank.sol";

contract Customer {
    address public owner;
    Seller public seller;
    Bank public bank;

    event ProductPurchased(uint productId, uint quantity, uint amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor(address sellerAddress, address bankAddress) {
        owner = msg.sender;
        seller = Seller(sellerAddress);
        bank = Bank(bankAddress);
    }

    function purchaseProduct(uint productId, uint quantity, uint amount) public onlyOwner {
        bank.processPayment(msg.sender, address(seller), amount);
        seller.sellProduct(productId, quantity, msg.sender);
        emit ProductPurchased(productId, quantity, amount);
    }
}
