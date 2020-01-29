const { Activity } = require("../models");

// CONTROLLER: functions that are called at /api/activities/

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
  }
};
