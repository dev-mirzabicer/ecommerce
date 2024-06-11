import { Request, Response } from 'express';
import { Bank, web3 } from '../web3';

export const processPayment = async (req: Request, res: Response) => {
  try {
    const { from, to, amount } = req.body;
    const accounts = await web3.eth.getAccounts();
    await Bank.methods.processPayment(from, to, amount).send({ from: accounts[0] });
    res.json({ message: 'Payment processed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deposit = async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;
    const accounts = await web3.eth.getAccounts();
    await Bank.methods.deposit().send({ from: accounts[0], value: amount });
    res.json({ message: 'Deposit successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const withdraw = async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;
    const accounts = await web3.eth.getAccounts();
    await Bank.methods.withdraw(amount).send({ from: accounts[0] });
    res.json({ message: 'Withdrawal successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBalance = async (req: Request, res: Response) => {
  try {
    const account = req.params.account;
    const balance = await Bank.methods.getBalance(account).call();
    res.json({ account, balance });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
