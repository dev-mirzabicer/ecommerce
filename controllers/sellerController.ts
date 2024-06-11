import { Request, Response } from 'express';
import { Seller, web3 } from '../web3.js';

export const sellProduct = async (req: Request, res: Response) => {
  try {
    const account = req.params.account;
    const { productId, quantity, customer } = req.body;
    await Seller.methods.sellProduct(productId, quantity, customer).send({ from: account, gasPrice: "1000000000" });
    res.json({ message: 'Product sold successfully' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message + (error as Error).stack });
  }
};
