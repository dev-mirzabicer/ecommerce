import { Router } from 'express';
import { shipProduct } from '../controllers/carrierController';

const router = Router();

router.post('/ship', shipProduct);

export default router;
