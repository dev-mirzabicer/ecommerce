// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Warehouse {
    // Events
    event OrderReceived(address indexed seller, address indexed customer, uint256[] itemIds);
    event ItemsSent(address indexed carrier, address indexed customer, uint256[] itemIds);
    event ItemsHandled(address indexed customer, uint256[] itemIds);

    // Structs
    struct Item {
        uint256 itemId;
        address seller;
        address customer;
        bool available;
    }

    struct Order {
        uint256 orderId;
        address seller; 
        address customer;
        uint256[] itemIds;
        Status status;
    }

    // Enum
    enum Status { Placed, Shipped, Delivered, Cancelled }

    // Storage
    Item[] public items;
    Order[] public orders;
    mapping(uint256 => Item) public itemIdToItem;
    mapping(address => uint256[]) public customerToOrders;
    mapping(uint256 => bool) public itemExists;

    // Functions
    function addItem(uint256 itemId) public {
        require(!itemExists[itemId], "Item with this ID already exists");
        items.push(Item(itemId, msg.sender, address(0), true));
        itemIdToItem[itemId] = items[items.length - 1];
        itemExists[itemId] = true;
    }

    function receiveOrder(address seller, address customer, uint256[] memory itemIds) public {
        require(itemIds.length > 0, "Order must contain at least one item");

        uint256 orderId = orders.length;
        orders.push(Order(orderId, seller, customer, itemIds, Status.Placed));
        customerToOrders[customer].push(orderId);

        for (uint256 i = 0; i < itemIds.length; i++) {
            Item storage item = itemIdToItem[itemIds[i]];
            require(itemExists[itemIds[i]], "Item does not exist");
            require(item.available, "Item not available");
            item.available = false; 
            item.customer = customer; // Assign the customer to the item
        }

        emit OrderReceived(seller, customer, itemIds); 
    }

    function sendItems(address carrier, address customer, uint256[] memory itemIds) public {
        require(itemIds.length > 0, "Must provide item IDs to ship");

        for (uint256 i = 0; i < itemIds.length; i++) {
            uint256 itemId = itemIds[i];
            require(itemExists[itemId], "Item does not exist");
            Item storage item = itemIdToItem[itemId];
            require(item.customer == customer, "Item does not belong to the specified customer");

            // You might add additional logic here to check if the order containing this item is in the Placed state
        }

        emit ItemsSent(carrier, customer, itemIds);
    }

    function handleItems(address customer, uint256[] memory itemIds) public {
        require(itemIds.length > 0, "Must provide item IDs to handle");

        for (uint256 i = 0; i < itemIds.length; i++) {
            uint256 itemId = itemIds[i];
            require(itemExists[itemId], "Item does not exist");
            Item storage item = itemIdToItem[itemId];
            require(item.customer == customer, "Item does not belong to the specified customer");

            // You might add additional logic here to check if the order containing this item is in the Shipped state
            
            item.available = true; // Mark the item as available again
        }

        emit ItemsHandled(customer, itemIds);
    }

    // Helper function to get order details by ID
    function getOrder(uint256 orderId) public view returns (Order memory) {
        require(orderId < orders.length, "Order does not exist");
        return orders[orderId];
    }
}
