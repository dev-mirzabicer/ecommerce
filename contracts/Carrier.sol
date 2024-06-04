// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Warehouse.sol";
import "./Customer.sol";

contract Carrier {
    Warehouse public warehouse;
    Customer public customer;

    event ItemReceived(address warehouse, address customer, uint256[] itemIds);
    event ItemSubmitted(address customer, uint256[] itemIds);

    constructor(address _warehouseAddress, address _customerAddress) {
        warehouse = Warehouse(_warehouseAddress);
        customer = Customer(_customerAddress);
    }

    function receiveItem(address warehouseAddress, address customerAddress, uint256[] memory itemIds) public {
        // Function to receive items from warehouse
        require(warehouseAddress == address(warehouse), "Invalid warehouse address");
        emit ItemReceived(warehouseAddress, customerAddress, itemIds);
        
        // Inform warehouse that items are received by carrier
        warehouse.handleItems(customerAddress, itemIds);
    }

    function submitItem(address customerAddress, uint256[] memory itemIds) public {
        // Function to submit items to customer
        require(customerAddress == address(customer), "Invalid customer address");
        emit ItemSubmitted(customerAddress, itemIds);
        
        // Inform customer that their items have been received
        customer.receiveItems();
    }
}