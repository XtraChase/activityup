const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const session = require("express-session");
const passport = require("./passport");

const app = express();
const PORT = process.env.PORT || 3001;

// BODY PARSER
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// STATIC REACT
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));

// PASSPORT CONFIG
app.use(passport.initialize());
app.use(passport.session());

// MONGO CONNECTION
mongoose.Promise = Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/activityUp",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// ROUTES
app.use(routes);

//displays link to console.log locations in node
['log', 'warn'].forEach(function(method) {
  var old = console[method];
  console[method] = function() {
    var stack = (new Error()).stack.split(/\n/);
    // Chrome includes a single "Error" line, FF doesn't.
    if (stack[0].indexOf('Error') === 0) {
      stack = stack.slice(1);
    }
    var args = [].slice.apply(arguments).concat([stack[1].trim()]);
    return old.apply(console, args);
  };
});

// START SERVER
app.listen(PORT, () =>
  console.log(`API proxied at ==> http://localhost:${PORT}`)
);
