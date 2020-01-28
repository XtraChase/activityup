const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true
  },
  subtitle: {
    type: Schema.Types.String,
    required: false
  },
  image: {
    type: Schema.Types.String,
    required: true
  },
  category: {
    type: Schema.Types.String,
    required: true
  },
  upvotes: {
    type: Schema.Types.Number
  }
});

activitySchema.pre("save", function(next) {
  console.log("activity saved");
  next();
});

const Activity = mongoose.model("activity", activitySchema);

module.exports = Activity;
