const { Activity, User } = require("../models");

// CONTROLLER: functions that are called at /api/groups/

module.exports = {
  findAll: (req, res) => {
    Activity.find(req.query)
      .populate("users")
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    Activity.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  byUser: (req, res) => {
    User.findById(req.query.id)
      .populate("activities")
      .then(user => res.json(user.activities));
  }
};
