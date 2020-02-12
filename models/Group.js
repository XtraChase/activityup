const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  groupName: {
    type: Schema.Types.String,
    required: true
  },
  category: {
    type: Schema.Types.String,
    required: true
  },
  subtitle: {
    type: Schema.Types.String,
    required: false
  },
  type: {
    type: Schema.Types.String,
    default: "open"
  },
  about: {
    type: Schema.Types.String,
    required: true
  },
  imageUrl: {
    type: Schema.Types.String,
    required: false
  },
  closedGroup: {
    type: Schema.Types.Boolean,
    default: false
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Events"
    }
  ]
});

groupSchema.pre("save", function(next) {
  console.log("group saved");
  next();
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
