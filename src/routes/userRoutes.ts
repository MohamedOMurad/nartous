import express from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from '../controllers/userController';

const UserRouter = express.Router();

UserRouter.route('/').get(getAllUsers).post(createUser);

UserRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export default UserRouter;
