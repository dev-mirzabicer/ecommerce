import { Router } from 'express';
import { purchaseProduct } from '../controllers/customerController.js';

const router = Router();

router.post('/purchase/:account', purchaseProduct);

export default router;
