const mongoose = require("mongoose");
const { User } = require("../models");

mongoose.connect("mongodb://localhost/activityUp")

const newUser = [
  {
    username: "freak6969",
    password: "xXfreakaliciousXx"
  }
];

User
  .remove({})
  .then(() => User.collection.insertMany(newUser))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });