const passport = require("passport");
const LocalStrategy = require("./LocalStrategy");
const { User } = require("../models");

passport.serializeUser((user, done) => {
  console.log("SERALIZE CALLED" + user);
  done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
  console.log("DESERIALIZE CALLED");
  User.findOne({ _id: id }, "username", (err, user) => {
    console.log("*** Deserialize user, user:");
    console.log(user);
    console.log("--------------");
    done(null, user);
  });
});

passport.use(LocalStrategy)

module.exports = passport;