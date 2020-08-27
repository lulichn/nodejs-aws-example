const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const { findByUsername } = require('../models/user');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
    },
    (username, password, done) => {
      findByUsername(username)
        .then(([rows, fields]) => {
          const user = rows[0];
          if (user && bcrypt.compareSync(password, user.password)) {
            return done(null, user); // ログイン成功
          }

          throw new Error();
        })
        .catch((error) => {
          // エラー処理
          return done(null, false, {
            message: '認証情報と一致するレコードがありません。',
          });
        });
    }
  )
);

// Session
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
