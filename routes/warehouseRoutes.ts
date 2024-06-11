import { Router } from 'express';
import { getInventory, addInventory, removeInventory } from '../controllers/warehouseController';

const router = Router();

router.get('/inventory/:productId', getInventory);
router.post('/inventory/add', addInventory);
router.post('/inventory/remove', removeInventory);

export default router;
