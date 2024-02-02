import * as jwt from 'jsonwebtoken';
import { TokenPayload } from '../Interfaces/iLogin';

const secret = process.env.JWT_SECRET || 'jwt_secret';

function sign(payload: TokenPayload): string {
  const token = jwt.sign(payload, secret);
  return token;
}

function verify(token: string): TokenPayload {
  const data = jwt.verify(token, secret) as TokenPayload;
  return data;
}

export default {
  sign,
  verify,
};
