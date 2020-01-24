// INDEX FOR PASSPORT JS
// Import new instance of passport
const passport = require("passport");
// import local strategy
const LocalStrategy = require("./LocalStrategy");
// import user model
const { User } = require("../models");

// seraialize user stores user id in a cookie at req.session
passport.serializeUser((user, done) => {
  console.log("SERALIZE CALLED" + user);
  done(null, { _id: user._id });
});

// deserialize user checks if user is in db
passport.deserializeUser((id, done) => {
  console.log("DESERIALIZE CALLED");
  User.findOne({ _id: id }, "username", (err, user) => {
    console.log("*** Deserialize user, user:");
    console.log(user);
    console.log("--------------");
    done(null, user);
  });
});

// add the local strategy to passport
passport.use("local", LocalStrategy)

module.exports = passport;