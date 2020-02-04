const { Group, Event } = require("../models");

// CONTROLLER: functions that are called at /api/events/

//FIX ME: groups and events connection in DB not working

module.exports = {
  findAll: (req, res) => {
    Event.find(req.query)
      .populate("events")
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    const newEvent = new Event({
      eventName: req.body.eventName,
      subtitle: req.body.subtitle,
      about: req.body.about,
      category: req.body.category,
      imageUrl: req.body.imageUrl,
      // date: req.body.date,
      // ended: req.body.ended,
      // upvotes: req.body.upvotes,
      group: [req.group],
      users: [req.user],
      // attendees: [req.attendees],
      activities: [req.activities]
    });
    newEvent
      .save()
      .then(data => {
        console.log(data);
        return Group.findByIdAndUpdate(req.group._id, {
          $push: { events: data }
        });
      })
      .then(data => {
        console.log(data);
        res.json(data.events);
      })
      .catch(err => res.status(422).json(err));
  },
  byGroup: (req, res) => {
    Group.findById(req.query.id)
      .populate("events")
      .then(group => res.json(group.events))
      .catch(err => res.status(422).json(err));
  },
  activities: (req, res) => {
    Activities.findById(req.query.id)
      .populate("events")
      .then(activities => res.json(activities.events))
      .catch(err => res.status(422).json(err));
  },
  // attendees: (req, res) => {
  //   Attendees.findById(req.query.id)
  //     .populate("events")
  //     .then(attendees => res.json(attendees.events))
  //     .catch(err => res.status(422).json(err));
  // },
};
