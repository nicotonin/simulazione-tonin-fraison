import { Request, Response, NextFunction } from 'express';

export const isUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user || req.user.role !== 'user') {
     res.status(404).json({ message: "L'utente non è uno user " });
    }
    next();
  } catch (error) {
    next(error);
  }
};

export const isAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user || req.user.role !== 'admin') {
     res.status(404).json({ message: "L'utente non è un admin" });
    }
    next();
  } catch (error) {
    next(error);
  }
};


