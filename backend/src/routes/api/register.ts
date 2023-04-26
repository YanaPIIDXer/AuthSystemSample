import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../../models/User";

export default async (req: Request, res: Response): Promise<void> => {
  const { userId, password } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ loginId: userId, password: hashedPassword, loginStrategy: 0 });
    res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};
