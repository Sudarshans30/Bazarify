import express from 'express';
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from '../controller/order-controller.js';
import { authentication, admin } from '../middleware/authMiddleware.js';

router.route('/').post(authentication, addOrderItems).get(authentication, admin, getOrders);
router.route('/mine').get(authentication, getMyOrders);
router.route('/:id').get(authentication, getOrderById);
router.route('/:id/pay').put(authentication, updateOrderToPaid);
router.route('/:id/deliver').put(authentication, admin, updateOrderToDelivered);

export default router;

