const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  activityName: {
    type: Schema.Types.String,
    required: false
  },
  subtitle: {
    type: Schema.Types.String,
    required: false
  },
  image: {
    type: Schema.Types.String,
    required: false
  },
  event: {
    type: Schema.Types.String,
    required: false
  },
  upvotes: {
    type: Schema.Types.Number,
    default: 0
  }
});

activitySchema.pre("save", function(next) {
  console.log("activity saved");
  next();
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
