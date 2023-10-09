import { Router } from 'express';
import verifyToken from '../middlewares/verifyToken.js';
import * as authController from '../controllers/auth.js';

const authRouter = Router();

authRouter.post('/register', authController.signUp);
authRouter.post('/login', authController.signIn);
authRouter.get('/me', verifyToken, authController.getUser);

export default authRouter;
