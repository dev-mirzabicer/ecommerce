import { Router } from 'express';
import { processPayment, deposit, withdraw, getBalance } from '../controllers/bankController.js';

const router = Router();

router.post('/processPayment', processPayment);
router.post('/deposit/:account', deposit);
router.post('/withdraw/:account', withdraw);
router.get('/balance/:account', getBalance);

export default router;
