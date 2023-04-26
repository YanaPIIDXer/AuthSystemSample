import { Request, Response } from "express";

export default async (req: Request, res: Response): Promise<void> => {
  res.status(500).json({ message: "Not Implemented." });
};
