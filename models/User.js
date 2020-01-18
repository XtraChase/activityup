const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  groups: [{
    type: Schema.Types.ObjectId,
    ref: "Group",
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
