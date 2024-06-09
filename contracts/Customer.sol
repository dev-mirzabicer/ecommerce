// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Seller.sol";

contract Customer {
    address public owner;
    Seller public seller;

    event ProductPurchased(uint productId, uint quantity);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor(address sellerAddress) {
        owner = msg.sender;
        seller = Seller(sellerAddress);
    }

    function purchaseProduct(uint productId, uint quantity) public onlyOwner {
        seller.sellProduct(productId, quantity, msg.sender);
        emit ProductPurchased(productId, quantity);
    }
}
