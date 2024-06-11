import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import * as WarehouseJSON from './contracts/Warehouse.json';
import * as SellerJSON from './contracts/Seller.json';
import * as CustomerJSON from './contracts/Customer.json';
import * as CarrierJSON from './contracts/Carrier.json';
import * as BankJSON from './contracts/Bank.json';

const web3 = new Web3('http://localhost:7545');

const networkId = await web3.eth.net.getId();

const Warehouse = new web3.eth.Contract(
  WarehouseJSON.abi as AbiItem[],
  WarehouseJSON.networks[networkId].address
);

const Seller = new web3.eth.Contract(
  SellerJSON.abi as AbiItem[],
  SellerJSON.networks[networkId].address
);

const Customer = new web3.eth.Contract(
  CustomerJSON.abi as AbiItem[],
  CustomerJSON.networks[networkId].address
);

const Carrier = new web3.eth.Contract(
  CarrierJSON.abi as AbiItem[],
  CarrierJSON.networks[networkId].address
);

const Bank = new web3.eth.Contract(
  BankJSON.abi as AbiItem[],
  BankJSON.networks[networkId].address
);

export { web3, Warehouse, Seller, Customer, Carrier, Bank };
