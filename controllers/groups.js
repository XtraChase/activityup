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
      users: [req.user],
      category: req.body.category,
      type: req.body.type,
      about: req.body.about,
      imageUrl: req.body.imageUrl
    })
    newGroup
      .save()
      .then(data => {
        console.log(data);
        return User.findByIdAndUpdate(req.user._id, { $push: { groups: data } });
      })
      .then(data => {
        console.log(data);
        res.json(data.groups)
      })
      .catch(err => res.status(422).json(err));
  },
  byUser: (req, res) => {
    User.findById(req.query.id)
      .populate("groups")
      .then(user => res.json(user.groups))
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
