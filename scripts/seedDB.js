const mongoose = require("mongoose");
const { User, Group } = require("../models");

mongoose.connect("mongodb://localhost/activityUp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// Delete existing user collection
User.deleteMany({})
  // Delete existing group collection
  .then(() => Group.deleteMany({}))
  .then(() => {
    // Make a group
    return new Group({
      name: "GroupA"
    }).save();
  })
  .then(data => {
    // Make users with random names and passwords and added group id to their groups array
    const newUser = [];
    for (let i = 0; i < 5; i++) {
      newUser.push(
        new User({
          username: "user" + pad(Math.floor(Math.random() * 100).toString(), 3),
          password:
            "password" + pad(Math.floor(Math.random() * 100).toString(), 3),
          groups: [data._id]
        })
      );
    }
    return User.create(newUser);
  })
  .then(data => {
    // update group with ids of users
    let ids = data.map(d => d._id);
    return Group.findOneAndUpdate({ name: "GroupA" }, { users: ids });
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