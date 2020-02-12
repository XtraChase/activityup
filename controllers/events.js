const mongoose = require("mongoose");
const ObjectID = mongoose.mongo.ObjectID;
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
      image: req.body.image,
      date: req.body.date,
      // ended: req.body.ended,
      // upvotes: req.body.upvotes,
      // attendees: [req.attendees],
      group: [new ObjectID(req.body.group)],
      users: [req.user],
      activities: [req.activities]
    });

    newEvent
      .save()
      .then(data => {
        // console.log(data);
        return Group.findByIdAndUpdate(req.group._id, {
          $push: { events: data }
        });
      })
      .then(data => {
        // console.log(data);
        res.json(data.events);
      })
      .catch(err => res.status(422).json(err));
  },
  byGroup: (req, res) => {
    Event.find({ group: [new ObjectID(req.query.id)] })
      .then(events => {
        res.json(events);
      })
      .catch(err => res.status(422).json(err));

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
  }
  // attendees: (req, res) => {
  //   Attendees.findById(req.query.id)
  //     .populate("events")
  //     .then(attendees => res.json(attendees.events))
  //     .catch(err => res.status(422).json(err));
  // },
};
