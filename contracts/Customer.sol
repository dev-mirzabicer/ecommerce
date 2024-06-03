// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Customer {
    struct Basket {
        uint256[] itemIds;
        bool paid;
    }

    mapping(address => Basket) public baskets;

    event BasketCreated(address customer, uint256[] itemIds);
    event PaymentMade(address customer, uint256 amount);
    event ItemsReceived(address customer, uint256[] itemIds);

    function createBasket(uint256[] memory itemIds) public {
        // Function to create a basket
        baskets[msg.sender] = Basket(itemIds, false);
        emit BasketCreated(msg.sender, itemIds);
    }

    function pay() public payable {
        // Function to pay for the basket
        require(baskets[msg.sender].itemIds.length > 0, "Basket does not exist");
        require(!baskets[msg.sender].paid, "Basket already paid");

        // Handle payment logic 
        baskets[msg.sender].paid = true;

        emit PaymentMade(msg.sender, msg.value);
    }

    function receiveItems() public {
        // Function to handle received items
        require(baskets[msg.sender].itemIds.length > 0, "Basket does not exist");
        require(baskets[msg.sender].paid, "Basket not paid yet");

        emit ItemsReceived(msg.sender, baskets[msg.sender].itemIds);

        // Clear the basket after items are received
        delete baskets[msg.sender];
    }
}
