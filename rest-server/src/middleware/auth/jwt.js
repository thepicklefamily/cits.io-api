import { sign, verify } from 'jsonwebtoken';


export const generateToken = async (username, id) => { // change email to username? ask avi
  const token = {};
  const payload = {
    expiresIn: '6h',
    username, // username? ask jae
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

