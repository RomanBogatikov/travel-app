const express = require('express');
const sessions = express.Router();
const User = require('../models/users.js');

// index route
sessions.get('/new/', (req, res) => {
  res.render('sessions/new.ejs');
});

// post route (to log in)
sessions.post('/', (req, res) => {
  console.log('req.body=', req.body);
  User.findOne({username: req.body.username, password: req.body.password}, (err, foundUser) => {
    console.log('foundUser=', foundUser);
    if (err) {
      console.log(err);
    }

    if (req.body.username === foundUser.username && req.body.password === foundUser.password) {
      req.session.currentUser = foundUser;
      console.log('req.session=', req.session);
      res.redirect('/travel/');
    }

    if (!foundUser) {
      res.send('<a href="sessions/new/">wrong username or password</a>')
    }
  });
});

// destroy route (to log out)
sessions.delete('/', (req, res)=>{
  req.session.destroy(() => {
      res.redirect('/travel/')
  })
})


module.exports = sessions
