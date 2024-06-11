import { Router } from 'express';
import { purchaseProduct } from '../controllers/customerController';

const router = Router();

router.post('/purchase', purchaseProduct);

export default router;
