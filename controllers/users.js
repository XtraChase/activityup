const { User } = require("../models");

module.exports = {
  findAll: (req, res) => {
    User.find(req.query).then(data => res.json(data));
  }
};
