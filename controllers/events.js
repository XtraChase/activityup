const { Group, Event } = require("../models");

// CONTROLLER: functions that are called at /api/events/

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
      // upvotes: req.body.upvotes,
      category: req.body.category,
      // date: req.body.date,
      // ended: req.body.ended,
      imageUrl: req.body.imageUrl,
      groupResponsible: [req.group],
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
      .then(activties => res.json(activties.events))
      .catch(err => res.status(422).json(err));
  },
  // attendees: (req, res) => {
  //   Attendees.findById(req.query.id)
  //     .populate("events")
  //     .then(attendees => res.json(attendees.events))
  //     .catch(err => res.status(422).json(err));
  // },
};
