const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    price: {
        type: Schema.Types.String,
        required: true,
    },
    category: {
        type: Schema.Types.String,
        required: true,
    },
    votes: {
        type: Schema.Types.Number,
    }
});

const Activity = mongoose.model("activity", activitySchema);

module.exports = Activity;