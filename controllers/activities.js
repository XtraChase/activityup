const { Activity, Group } = require("../models");

// CONTROLLER: functions that are called at /api/activities/

module.exports = {
  findAll: (req, res) => {
    Activity.find(req.query)
      .populate("activities")
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    const newActivity = new Activity({
      activityName: req.body.activityName,
      subtitle: req.body.subtitle,
      imageUrl: req.body.imageUrl,
      category: req.body.category,
      groupResponsible: [req.group],
      hostingEvent: [req.events],
      upvotes: req.body.upvotes
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

  // TODO check to see if the user has upvoted the activity in their user's upvoted activities schema
  upvote: (req, res) => {
    console.log(req.body);
    Activity.findByIdAndUpdate(req.body.id, { $inc: { upvotes: 1 } }).then(
      console.log("******UPVOTED******")
    );
  },

  byGroup: (req, res) => {
    Group.findById(req.query.id)
      .populate("activities")
      .then(group => res.json(group.activities))
      .catch(err => res.status(422).json(err));
  },
  byEvent: (req, res) => {
    Event.findById(req.query.id)
      .populate("activities")
      .then(events => res.json(events.activities))
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
