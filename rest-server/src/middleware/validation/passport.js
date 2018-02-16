import passport from 'passport';
import local from 'passport-local';

import {
  loginQuery
} from '../../components/auth/authQueries';

import {
  comparePasswords
} from '../auth/bcrypt';
const LocalStrategy = local.Strategy;

const localOptions = {};


passport.use(new LocalStrategy(localOptions, async (username, password, done) => {
  try {
    const { rows } = await loginQuery({ username });
    if (!rows.length) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    const passwordsMatch = await comparePasswords(password, rows[0].password);
    if (!passwordsMatch) {
      return done(null);
    }
    return done(null, rows);
  } catch (err) {
    return done(err);
  }
}));

export default passport;