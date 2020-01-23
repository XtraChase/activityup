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

// START SERVER
app.listen(PORT, () =>
  console.log(`API proxied at ==> http://localhost:${PORT}`)
);
