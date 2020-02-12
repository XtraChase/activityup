const { Group, User } = require("../models");

// CONTROLLER: functions that are called at /api/groups/

module.exports = {
  findAll: (req, res) => {
    Group.find(req.query)
      .populate("users")
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    const newGroup = new Group({
      groupName: req.body.groupName,
      category: req.body.category,
      subtitle: req.body.subtitle,
      about: req.body.about,
      imageUrl: req.body.imageUrl,
      closedGroup: req.body.closedGroup,
      users: [req.user],
      events: [req.events]
    });
    // console.log(req.body);
    newGroup
      .save()
      .then(data => {
        // console.log(data);
        return User.findByIdAndUpdate(req.user._id, {
          $push: { groups: data }
        });
      })
      .then(data => {
        console.log(data);
        res.json(data.groups);
      })
      .catch(err => res.status(422).json(err));
  },
  byUser: (req, res) => {
    User.findById(req.query.id)
      .populate("groups")
      .then(user => res.json(user.groups))
      .catch(err => res.status(422).json(err));
  },
  hostedEvents: (req, res) => {
    User.findById(req.query.id)
      .populate("groups")
      .then(events => res.json(events.groups))
      .catch(err => res.status(422).json(err));
  },
  createGroup: (req, res) => {
    const { name } = req.body;

    const newGroup = new Group({
      groupName: name
    });
    newGroup.save((err, savedGroup) => {
      if (err) return res.json(err);
      res.json(savedGroup);
    });
  }
};
