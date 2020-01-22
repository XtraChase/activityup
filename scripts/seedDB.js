const mongoose = require("mongoose");
const { User, Group } = require("../models");

mongoose.connect("mongodb://localhost/activityUp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// create users on db
User.collection
  .remove({})
  .then(() => Group.collection.remove({}))
  .then(() => {
    console.log("yo");
    return new Group({
      name: "GroupA"
    }).save();
  })
  .then((data) => {
    // random user dummy data
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
    let ids = data.map((d) => d._id);
    console.log(ids);
    return Group.findOneAndUpdate({ name: "GroupA" }, { users: ids })
  })
  .then(data => {
    console.log(data);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// process.exit(0);

function pad(str, max) {
  return str.length < max ? pad("0" + str, max) : str;
}
