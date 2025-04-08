import { Request, Response } from 'express';
import { User } from '../entities/User';

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const users = await User.find();
  if (!users) {
    res.status(404).json({
      status: 'fail',
      message: 'No users found',
    });
  }
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findOneBy({ _id: Number(id) });
  if (!user) {
    res.status(404).json({
      status: 'fail',
      message: 'No user found with that ID',
    });
  }
  console.log(user);
  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  if (!name && !email && !password) res.status(401).send('missing data');
  console.log(`name: ${name}, email: ${email}, password: ${password} `);

  const user = User.create({ name, email, password });
  await user.save();
  res.status(200).json({
    status: 'success',
    data: {
      user: {
        name,
        email,
        password,
      },
    },
  });
};

export const updateUser = (req: Request, res: Response) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};
export const deleteUser = (req: Request, res: Response) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};
