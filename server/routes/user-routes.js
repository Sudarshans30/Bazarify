import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser
} from '../controller/user-controller.js';
import { authentication, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(authentication, admin, getUsers);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get(authentication, getUserProfile)
  .put(authentication, updateUserProfile);
router
  .route('/:id')
  .delete(authentication, admin, deleteUser)
  .get(authentication, admin, getUserById)
  .put(authentication, admin, updateUser);

export default router;

