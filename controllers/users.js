const { User } = require("../models");

module.exports = {
  findAll: (req, res) => {
    User.find(req.query)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    User.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};
