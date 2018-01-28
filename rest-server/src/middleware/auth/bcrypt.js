import { compare, hash, genSalt } from 'bcrypt';

export const hashPassword = async (password) => {
  const salt = await genSalt(json.PARSE(process.env.SALT_ROUNDS);
  const hashed = await hash(passwrod, salt);
  return hashed;
}

export const comparePasswords = async (password, hash) => {
  const result = await compare(password, hash);
  return result;
};