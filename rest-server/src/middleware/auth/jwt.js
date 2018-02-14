import { sign, verify } from 'jsonwebtoken';
import { success, error } from '../../lib/log';


export const generateToken = async (username, id) => { 
  const token = {};
  const payload = {
    exp: (Date.now() / 1000) + 604800,
    // exp: (Date.now() / 1000) + 30,
    username, 
    id
  };
  token.accessToken = sign(payload, process.env.TOKEN_SECRET_KEY);
  return token;
};

export const verifyToken = async (req, res, next) => {
  // console.log('this is req ..*.. ', req.headers);
  try { 
    req.url === '/api/auth/login' || req.url === '/api/auth/signup' || req.headers.authorization === 'raw' ? next() : 
    verify(req.headers.authorization, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
       err ? 
        (error('token not verified'), next()) 
        : 
        decoded ? 
          (success('token verified'), next()) 
          : 
          console.log('something went very very wrong...');
      });
  } catch (err) {
    error('error in jwt');
    res.sendStatus(204);
    next(err);
  }
};

