import Router from 'express';
import bcrypt from 'bcrypt';
import db from '../models';

const userRouter = Router();
userRouter.get('/', async (req, res) => {
  const users = await db.user.findAll({
    attributes: {
      exclude: ['password'],
    },
  });
  return res.status(200).json(users);
});

userRouter.post('/register', async (req, res) => {
  const user = await db.user.findOne({ where: { email: req.body.email } });
  if (user === null) {
    const password = bcrypt.hashSync(req.body.password, 10);
    await db.user.create({
      email: req.body.email,
      password,
    });
  } else {
    return res.status(200).json('User already exist');
  }
  return res.status(200).json('Registered user Successfully');
});

userRouter.post('/login', async (req, res) => {
  const user = await db.user.findOne({ where: { email: req.body.email } });

  if (user === null) {
    return res.status(200).json('Email not found');
  }

  const hashtypes = JSON.stringify(user);
  const passwordData = JSON.parse(hashtypes);
  const hash = bcrypt.compareSync(req.body.password, passwordData.password);
  if (hash === true) {
    return res.status(200).json('Logged In Successfully');
  }
  return res.status(200).json('Password is incorrect');
});

export default userRouter;
