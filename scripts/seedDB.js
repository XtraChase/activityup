const mongoose = require("mongoose");
const { User, Group, Activity } = require("../models");

const activityUtil = require("./activities.json");

mongoose.connect("mongodb://localhost/activityUp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

Activity.deleteMany({})
  .then(() => {
    return activityUtil.map(a =>
      new Activity({
        name: a.name,
        image: a.image,
        subtitle: a.subtitle,
        datetime: a.datetime,
        category: a.category
      })
    );
  })
  .then(data => Activity.create(data))
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Delete existing user collection
User.deleteMany({})
  // Delete existing group collection
  .then(() => Group.deleteMany({}))
  .then(() => {
    // Make a group
    return new Group({
      groupName: "GroupA"
    }).save();
  })
  .then(data => {
    // Make users with random names and passwords and added group id to their groups array
    const newUser = [];
    for (let i = 0; i < 5; i++) {
      const _u = "user" + pad(Math.floor(Math.random() * 100).toString(), 3);
      const _p =
        "password" + pad(Math.floor(Math.random() * 100).toString(), 3);
      console.log({
        _u,
        _p
      });
      newUser.push(
        new User({
          username: _u,
          password: _p,
          groups: [data._id]
        })
      );
    }
    return User.create(newUser);
  })
  .then(data => {
    // update group with ids of users
    let ids = data.map(d => d._id);
    return Group.findOneAndUpdate({ groupName: "GroupA" }, { users: ids });
  })
  .then(data => {
    console.log(data);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

function pad(str, max) {
  return str.length < max ? pad("0" + str, max) : str;
}
