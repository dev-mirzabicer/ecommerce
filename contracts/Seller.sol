// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Seller {
    struct Item {
        uint256 id;
        string name;
        uint256 price;
    }

    Item[] public items;
    mapping(address => bool) public payments;

    event ItemListCreated(Item[] items);
    event PaymentVerified(address customer);
    event WarehouseInformed(address customer, uint256[] itemIds);

    function createItemList(Item[] memory _items) public {
        // Function to create item list
        items = _items;
        emit ItemListCreated(_items);
    }

    function verifyPayment(address customer) public {
        // Function to verify payment
        payments[customer] = true;
        emit PaymentVerified(customer);
    }

    function informWarehouse(address customer, uint256[] memory itemIds) public {
        // Function to inform warehouse
        emit WarehouseInformed(customer, itemIds);
    }
}
