// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Bank {
    event PaymentReceived(address indexed customer, uint256 amount);
    event SellerInformed(address indexed customer);

    mapping(address => uint256) public balances;

    function receivePayment(address customer) public payable {
        // Function to receive payment from customer
        require(msg.value > 0, "Payment must be greater than zero");
        balances[customer] += msg.value;
        emit PaymentReceived(customer, msg.value);
    }

    function informSeller(address customer) public {
        // Function to inform seller about payment
        require(balances[customer] > 0, "No payment received from this customer");
        emit SellerInformed(customer);
    }
}
