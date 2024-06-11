import { Request, Response } from 'express';
import { Seller, web3 } from '../web3';

export const sellProduct = async (req: Request, res: Response) => {
  try {
    const { productId, quantity, customer } = req.body;
    const accounts = await web3.eth.getAccounts();
    await Seller.methods.sellProduct(productId, quantity, customer).send({ from: accounts[0] });
    res.json({ message: 'Product sold successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
