import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import WarehouseJSON from '/home/user/ecommerce/build/contracts/Warehouse.json' with { type: "json" };
import SellerJSON from '/home/user/ecommerce/build/contracts/Seller.json' with { type: "json" };
import CustomerJSON from '/home/user/ecommerce/build/contracts/Customer.json' with { type: "json" };
import CarrierJSON from '/home/user/ecommerce/build/contracts/Carrier.json' with { type: "json" };
import BankJSON from '/home/user/ecommerce/build/contracts/Bank.json' with { type: "json" };

const web3 = new Web3('http://localhost:8545');

const networkId = await web3.eth.net.getId();
const networkIdStr = networkId.toString();

const Warehouse = new web3.eth.Contract(
  WarehouseJSON.abi as AbiItem[],
  WarehouseJSON.networks[networkIdStr].address
);

const Seller = new web3.eth.Contract(
  SellerJSON.abi as AbiItem[],
  SellerJSON.networks[networkIdStr].address
);

const Customer = new web3.eth.Contract(
  CustomerJSON.abi as AbiItem[],
  CustomerJSON.networks[networkIdStr].address
);

const Carrier = new web3.eth.Contract(
  CarrierJSON.abi as AbiItem[],
  CarrierJSON.networks[networkIdStr].address
);

const Bank = new web3.eth.Contract(
  BankJSON.abi as AbiItem[],
  BankJSON.networks[networkIdStr].address
);

export { web3, Warehouse, Seller, Customer, Carrier, Bank };
