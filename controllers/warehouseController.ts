import { Request, Response } from 'express';
import { Warehouse, web3 } from '../web3.js';

export const getInventory = async (req: Request, res: Response) => {
  try {
    const productId = parseInt(req.params.productId);
    const quantity = await Warehouse.methods.getInventory(productId).call();
    res.json({ productId, quantity });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message + (error as Error).stack });
  }
};

export const addInventory = async (req: Request, res: Response) => {
  try {
    const { productId, quantity } = req.body;
    const accounts = await web3.eth.getAccounts();
    await Warehouse.methods.addInventory(productId, quantity).send({ from: accounts[0], gasPrice: "1000000000" });
    res.json({ message: 'Inventory added successfully' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message + (error as Error).stack });
  }
};

export const removeInventory = async (req: Request, res: Response) => {
  try {
    const productId = parseInt(req.params.productId);
    const { quantity } = req.body;
    const accounts = await web3.eth.getAccounts();
    await Warehouse.methods.removeInventory(productId, quantity).send({ from: accounts[0], gasPrice: "1000000000" });
    res.json({ message: 'Inventory removed successfully' });
  } catch (error) { 
    res.status(500).json({ error: (error as Error).message + (error as Error).stack });
  }
};
