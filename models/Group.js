const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    name: {
        type: Schema.Types.String,
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

groupSchema.pre('save', function (next) {
    console.log("group saved");
    next();
})

const Group = mongoose.model("group", groupSchema);

module.exports = Group;