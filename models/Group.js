const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    date: [{
        type: Schema.Types.ObjectId,
        ref: "Date"
    }]
});

const Group = mongoose.model("group", groupSchema);

module.exports = Group;