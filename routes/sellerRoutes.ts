import { Router } from 'express';
import { sellProduct } from '../controllers/sellerController.js';

const router = Router();

router.post('/sell/:account', sellProduct);

export default router;
