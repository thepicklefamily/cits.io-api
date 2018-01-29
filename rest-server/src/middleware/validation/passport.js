import passport from 'passport';
import local from 'passport-local';
// import jwt from 'passport-jwt';

import {
  loginQuery
} from '../../components/auth/authQueries';

import {
  comparePasswords
} from '../auth/bcrypt';
const LocalStrategy = local.Strategy;
// const JwtStrategy = jwt.Strategy;
// const ExtractJwt = jwt.ExtractJwt;

// const jwtOptions = {
//   jwtFromRequest: ExtractJwt.fromHeader('authorization'),
//   secretOrKey: process.env.TOKEN_SECRET
// };

passport.use(new LocalStrategy(null, async (username, password, done) => {
  try {
    const { rows } = await loginQuery({ username });
    if (!rows.length) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    const passwordsMatch = await comparePasswords(password, rows[0].password);
    if (!passwordsMatch) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, rows);
  } catch (err) {
    return done(err);
  }
}));

export default passport;