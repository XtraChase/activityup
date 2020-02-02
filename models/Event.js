const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: {
    type: Schema.Types.String,
    required: true
  },
  // subtitle: {
  //   type: Schema.Types.String,
  //   required: false
  // },
  // date: {
  //   type: Schema.Types.Date,
  //   required: false
  // },
  // about: {
  //   type: Schema.Types.String,
  //   required: false
  // },
  // imageUrl: {
  //   type: Schema.Types.String,
  //   required: false
  // },
  // category: {
  //   type: Schema.Types.String,
  //   required: false
  // },
  // // groupResponsible: {
  // //   type: Schema.Types.ObjectId,
  // //   ref: "Group"
  // // },
  // upvotes: {
  //   type: Schema.Types.Number,
  //   default: 0
  // },
  // ended: {
  //   type: Schema.Types.Boolean,
  //   default: false
  // },
  // closedEvent: {
  //   type: Schema.Types.Boolean,
  //   default: false
  // },
  // attendees: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Attendees"
  //   }
  // ],
  // activities: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Activity"
  //   }
  // ]
});

eventSchema.pre("save", function(next) {
  console.log("event saved");
  next();
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
