const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signIn', (req, res) => {
  res.render('signIn', {});
});

router.post(
  '/signIn',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signIn',
    failureFlash: true,
  })
);

router.use('/users', require('./users'));

module.exports = router;
