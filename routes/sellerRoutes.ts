import { Router } from 'express';
import { sellProduct } from '../controllers/sellerController';

const router = Router();

router.post('/sell', sellProduct);

export default router;
