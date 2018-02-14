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
  console.log('passport says hello');
  try {
    const { rows } = await loginQuery({ username });
    if (!rows.length) {
      console.log('username hello');
      return done(null, false, { message: 'Incorrect username.' });
    }
    const passwordsMatch = await comparePasswords(password, rows[0].password);
    if (!passwordsMatch) {
      console.log('password hello');
      return done(null);
    }
    console.log('wildcard hello');
    return done(null, rows);
  } catch (err) {
    console.log('error hello');
    return done(err);
  }
}));

export default passport;