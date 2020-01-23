const { User } = require("../models");

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
      username: req.body.username,
      password: req.body.password
    });
    newUser
      .save()
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  register: (req, res) => {
    const { username, password } = req.body;

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
          username: username,
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
