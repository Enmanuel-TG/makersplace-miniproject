import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../utilities/consts.utility';
import type { ExtendedRequest } from '../types.d';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }
  try {
    const decoded = jwt.verify(token, TOKEN_SECRET) as unknown as { id: string };
    (req as unknown as ExtendedRequest).userId = Number(decoded.id);
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;
