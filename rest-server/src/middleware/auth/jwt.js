import { sign, verify } from 'jsonwebtoken';


export const generateToken = async (username, id) => { 
  const token = {};
  const payload = {
    expiresIn: '1m',
    username, 
    id
  }
  token.accessToken = sign(payload, process.env.TOKEN_SECRET_KEY)

  return token;
}

// export const verifyToken = async (?) => {
//   try { 
//     verify(token, process.env.TOKEN_SECRET_KEY)
//   } catch (err) {

//   }
// }

