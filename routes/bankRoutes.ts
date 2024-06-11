import { Router } from 'express';
import { processPayment, deposit, withdraw, getBalance } from '../controllers/bankController';

const router = Router();

router.post('/processPayment', processPayment);
router.post('/deposit', deposit);
router.post('/withdraw', withdraw);
router.get('/balance/:account', getBalance);

export default router;
