import { Request, Response } from 'express';
import { Carrier } from '../web3';

export const shipProduct = async (req: Request, res: Response) => {
  try {
    const { productId, quantity, customer, warehouseAddress } = req.body;
    const accounts = await web3.eth.getAccounts();
    await Carrier.methods.shipProduct(productId, quantity, customer, warehouseAddress).send({ from: accounts[0] });
    res.json({ message: 'Product shipped successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
