const { Activity, Group } = require("../models");

// CONTROLLER: functions that are called at /api/groups/

module.exports = {
  findAll: (req, res) => {
    Activity.find(req.query)
      .populate("groups")
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    const newActivity = new Activity({
      activityName: req.body.activityName,
      groups: [req.group],
      category: req.body.category,
      type: req.body.type,
      about: req.body.about,
      imageUrl: req.body.imageUrl
    });
    newActivity
      .save()
      .then(data => {
        console.log(data);
        return Group.findByIdAndUpdate(req.group._id, {
          $push: { activities: data }
        });
      })
      .then(data => {
        console.log(data);
        res.json(data.activities);
      })
      .catch(err => res.status(422).json(err));
  },
  byGroup: (req, res) => {
    Group.findById(req.query.id)
      .populate("activities")
      .then(group => res.json(group.activities))
      .catch(err => res.status(422).json(err));
  },
  createActivity: (req, res) => {
    const { name } = req.body;

    const newActivity = new Activity({
      activityName: name
    });
    newActivity.save((err, savedActivity) => {
      if (err) return res.json(err);
      res.json(savedActivity);
    });
  }
};
