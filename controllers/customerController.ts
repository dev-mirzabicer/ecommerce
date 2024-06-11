import { Request, Response } from 'express';
import { Customer } from '../web3';

export const purchaseProduct = async (req: Request, res: Response) => {
  try {
    const { productId, quantity, amount } = req.body;
    const accounts = await web3.eth.getAccounts();
    await Customer.methods.purchaseProduct(productId, quantity, amount).send({ from: accounts[0] });
    res.json({ message: 'Product purchased successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
