import { Request, Response } from 'express';
import { Carrier, web3 } from '../web3.js';

export const shipProduct = async (req: Request, res: Response) => {
  try {
    const { productId, quantity, customer, warehouseAddress } = req.body;
    const accounts = await web3.eth.getAccounts();
    await Carrier.methods.shipProduct(productId, quantity, customer, warehouseAddress).send({ from: accounts[0], gasPrice: "1000000000" });
    res.json({ message: 'Product shipped successfully' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message + (error as Error).stack });
  }
};
