const mongoose = require("mongoose");
const { User, Activity, Date, Group } = require("../models");

mongoose.connect("mongodb://localhost/activityUp");

// random user dummy data
const newUser = [];
for (let i = 0; i < 5; i++) {
  newUser.push({
    username: "user" + pad(Math.floor(Math.random() * 100).toString(), 3),
    password: "password" + pad(Math.floor(Math.random() * 100).toString(), 3)
  });
}

// create users on db
User.remove({})
  .then(() => Group.remove({}))
  .then(() => User.collection.insertMany(newUser))
  .then(data => {
    // console.log(objToArray(data.insertedIds))
    console.log(data.result.n + " Users inserted");
    return Group.collection.insert({
      name: "GroupA",
      users: data.insertedIds
    });
  })
  .then(data => {
    console.log(data)
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

function pad(str, max) {
  return str.length < max ? pad("0" + str, max) : str;
}

function objToArray(obj) {
  let output = [];
  for (const i in obj) {
    output.push(obj[i]);
  }
  return output;
}
