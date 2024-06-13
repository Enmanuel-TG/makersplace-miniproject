import { NextFunction, Request, Response } from 'express';
import { getTokenId } from '../utilities/get-token-id.utility.ts';
import { prisma } from '../utilities/prisma.utility.ts';
import { ROLES } from '../utilities/consts.utility.ts';
export const getUserAndRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const userId = getTokenId(req);
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (user.role !== ROLES.user && user.role !== ROLES.admin) {
      return res.status(401).json({ message: 'user not authorized' });
    }
    return next();
  } catch (error: any) {
    return res.status(500).json({ message: 'Error processing request', error: error.message });
  }
};
