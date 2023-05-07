import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from '../controller/product-controller.js';

import { authentication, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(authentication, admin, createProduct);
router.route('/:id/reviews').post(authentication, createProductReview);
router.get('/top', getTopProducts);
router
  .route('/:id')
  .get(getProductById)
  .put(authentication, admin, updateProduct)
  .delete(authentication, admin, deleteProduct);

export default router;
