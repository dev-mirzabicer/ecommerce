import { Request, Response } from 'express';
import { Bank, web3 } from '../web3.js';

export const processPayment = async (req: Request, res: Response) => {
  try {
    const { from, to, amount } = req.body;
    await Bank.methods.processPayment(from, to, amount).send({ from, gasPrice: "1000000000" });
    res.json({ message: 'Payment processed successfully' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message + (error as Error).stack });
  }
};

export const deposit = async (req: Request, res: Response) => {
  try {
    const account = req.params.account;
    const { amount } = req.body;
    console.log("aaa");
    await Bank.methods.deposit().send({ from: account, value: amount, gasPrice: "1000000000" });
    res.json({ message: 'Deposit successful' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message + (error as Error).stack });
  }
};

export const withdraw = async (req: Request, res: Response) => {
  try {
    const account = req.params.account;
    const { amount } = req.body;
    await Bank.methods.withdraw(amount).send({ from: account, gasPrice: "1000000000" });
    res.json({ message: 'Withdrawal successful' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message + (error as Error).stack });
  }
};

export const getBalance = async (req: Request, res: Response) => {
  try {
    const account = req.params.account;
    const balance = await Bank.methods.getBalance(account).call();
    const balanceStr = balance instanceof BigInt ? balance.toString() : ((balance as unknown) as String);
    res.json({ account, balanceStr });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message + (error as Error).stack });
  }
};
