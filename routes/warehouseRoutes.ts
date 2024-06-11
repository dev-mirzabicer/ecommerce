import { Router } from 'express';
import { getInventory, addInventory, removeInventory } from '../controllers/warehouseController.js';

const router = Router();

router.post('/inventory/add', addInventory);
router.get('/inventory/:productId', getInventory);
router.delete('/inventory/:productId', removeInventory);

export default router;
