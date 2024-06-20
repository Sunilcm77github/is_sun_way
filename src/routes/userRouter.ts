import { Router } from 'express';
import userController from '../controllers/userController';

const userRouter = Router();

userRouter.get('/', userController.getExample);
userRouter.post('/', userController.createExample);

export default userRouter;
