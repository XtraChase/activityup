const { User } = require("../models");

// CONTROLLER: functions that are called at /api/users/

module.exports = {
  findAll: (req, res) => {
    User.find(req.query)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  findOne: (req, res) => {
    User.findOne(req.query)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    const newUser = new User({
      fullName: req.body.fullName,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    newUser
      .save()
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  // registers new users by extractinng from data passed into req.body and creating new user on db with that data
  register: (req, res) => {
    const { fullName, username, email, password } = req.body;

    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        console.log("User.js post error: ", err);
      } else if (user) {
        res.json({
          error: `Sorry, already a user with the username: ${username}`
        });
      } else {
        const newUser = new User({
          fullName: fullName,
          username: username,
          email: email,
          password: password
        });
        newUser.save((err, savedUser) => {
          if (err) return res.json(err);
          res.json(savedUser);
        });
      }
    });
  }
};
