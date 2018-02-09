import { sign, verify } from 'jsonwebtoken';
import { success, error } from '../../lib/log';


export const generateToken = async (username, id) => { 
  const token = {};
  const payload = {
    exp: (Date.now() / 1000) + 604800,
    username, 
    id
  }
  token.accessToken = sign(payload, process.env.TOKEN_SECRET_KEY)

  return token;
};

export const verifyToken = async (req, res, next) => {
  console.log('this is req headers auth ', req.url);
  try { 
    req.url === '/api/auth/login' || req.url === '/api/auth/signup' ? next() : 
    verify(req.headers.authorization, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
       err ? (error('error: token not verified'), res.send(err)) : decoded ? (success('token verified'), next()) : console.log('something went very very wrong...');
      });
  } catch (err) {
    error('token not verified');
    next(err);
  }
};

