const router = require("express").Router();
const { userController } = require("../../controllers");
const passport = require("../../passport");

router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

router.route("/register").post(() => {
  console.log("user signup");

  const { username, password } = req.body;
  // ADD VALIDATION
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log("User.js post error: ", err);
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`
      });
    } else {
      const newUser = new User({
        username: username,
        password: password
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        res.json(savedUser);
      });
    }
  });
});

router.route("/login").post(
  function(req, res, next) {
    console.log("LOGIN BODY", req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("LOGGED IN", req.user, req.session);
    res.send(req.user);
  }
);

module.exports = router;
