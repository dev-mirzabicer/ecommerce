import { Request, Response } from 'express';
import { Customer, web3 } from '../web3.js';

export const purchaseProduct = async (req: Request, res: Response) => {
  try {
    const account = req.params.account;
    const { productId, quantity, amount } = req.body;
    const accounts = await web3.eth.getAccounts();
    // await Customer.methods.purchaseProduct(productId, quantity, amount).send({ from: account, gasPrice: "1000000000" });
    res.json({ message: 'Product purchased successfully' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message + (error as Error).stack });
  }
};
