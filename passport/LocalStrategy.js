const { User } = require("../models");
const LocalStrategy = require("passport-local").Strategy;

// create a new strategy from passport-local
const strategy = new LocalStrategy(
    {
        usernameField: "username"
    },
    // authentication function, this is what gets called on passport.authenticate('local')
    function (username, password, done) {
        console.log("authenticating...");
        
        User.findOne({ username }, (err, user) => {
            if (err) return done(err);
            if (!user) return done(null, false, { message: "No user with that name" });
            if (!user.checkPassword(password)) return done(null, false, { message: "Incorrect Username or Password" });
            return done(null, user)
        })
    }
)

module.exports = strategy;