const Warehouse = artifacts.require("Warehouse");
const Seller = artifacts.require("Seller");
const Customer = artifacts.require("Customer");
const Carrier = artifacts.require("Carrier");
const Bank = artifacts.require("Bank");

module.exports = async function(deployer) {
  await deployer.deploy(Warehouse);
  const warehouseInstance = await Warehouse.deployed();
  await deployer.deploy(Bank);
  const bankInstance = await Bank.deployed();

  await deployer.deploy(Seller, warehouseInstance.address, bankInstance.address);
  const sellerInstance = await Seller.deployed();

  await deployer.deploy(Customer, sellerInstance.address, bankInstance.address);
  await deployer.deploy(Carrier);
};