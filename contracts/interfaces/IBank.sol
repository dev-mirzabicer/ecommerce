// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IBank {
    function receivePayment(address customer) external payable;
    function informSeller(address customer) external;
}
