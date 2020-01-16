// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ActivityUpSchema object
// This is similar to a Sequelize model
var ActivityUpSchema = new Schema({
  // `string` must be of type String. We "trim" it to remove any trailing white space
  // `string` is a required field, and a custom error message is thrown if it is not supplied
  activityUp: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  // `number` is of type Number
  // `number` must be unique
  // `number` is required. The default mongoose error message is thrown if it is not supplied
  completed: {
    type: Boolean
  }
});

// This creates our model from the above schema, using mongoose's model method
var ActivityUp = mongoose.model("ActivityUp", ActivityUpSchema);

// Export the ActivityUp model
module.exports = ActivityUp;
