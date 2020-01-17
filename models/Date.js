const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dateSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    acitivites: [{
        type: Schema.Types.ObjectId,
        ref: "Activity",
    }]
});

const Date = mongoose.model("date", dateSchema);

module.exports = Date;