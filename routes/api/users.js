const router = require("express").Router();
const { userController } = require("../../controllers");
const passport = require("../../passport");

// routes to /api/user/
// GET a convenience to find all users in the db
// POST a convience to create a new user from api
router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

// routes to /api/user/register/
// POST calls register function from userController which adds information from the registration form to the database as a new user
router.route("/register").post(userController.register);

// routes to /api/user/login/
// POST logs body from login form then sends that to authenticate then sends the logged in user id in response
router.route("/login").post(
  function(req, res, next) {
    console.log("LOGIN BODY", req.body);
    next();
  },
  (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) return next(err);
      if (info) return res.json(info);
      req.logIn(user, e => {
        if (e) return next(e);
        return res.json(user)
      })
    })(req, res, next);
  }
  // },
  // (req, res) => {
  //   console.log("LOGGED IN", req.user, req.session);
  //   res.json(req.user._id);
  // }
);

router.route("/logout").get((req, res) => {
  console.log("log out!!!");
  req.logOut();
  res.json({ message: "You are logged out" })
})

// routes to /api/user/sessionUser/
// GET if there is a session user returns that in the response else returns null
router.route("/sessionUser").get((req, res) => {
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

module.exports = router;
