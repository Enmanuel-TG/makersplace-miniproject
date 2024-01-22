import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from "../utilities/consts.utility";

export function createAccessToken(payload: any): Promise<any> {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET,
      { expiresIn: '1d' },
      (err, token) => {
      if (err) reject(err);
      resolve(token);
      }
    );
  });
}