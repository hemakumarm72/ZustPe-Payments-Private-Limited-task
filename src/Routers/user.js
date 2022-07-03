import Router from 'express';

const userRouter = Router();
userRouter.get('/login', async (req, res) => res.status(200).json('login user Successfully'));
userRouter.get('/register', async (req, res) => res.status(200).json('Registered user Successfully'));

export default userRouter;
