const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dateSchema = new Schema({
    date: {
        type: Schema.Types.Date,
        required: true
    },
    completed: {
        type: Schema.Types.Boolean,
        default: false,
    },
    activites: [{
        type: Schema.Types.ObjectId,
        ref: "Activity",
    }]
});

const Date = mongoose.model("date", dateSchema);

module.exports = Date;