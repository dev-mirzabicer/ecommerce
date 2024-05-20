// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Bank {
    event PaymentReceived(address customer, uint256 amount);
    event SellerInformed(address customer);

    function receivePayment(address customer) public payable {
        // Function to receive payment from customer
        emit PaymentReceived(customer, msg.value);
    }

    function informSeller(address customer) public {
        // Function to inform seller about payment
        emit SellerInformed(customer);
    }
}
