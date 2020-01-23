const router = require("express").Router();
const { userController } = require("../../controllers");
const passport = require("../../passport");

router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

router.route("/register").post(userController.register);

router.route("/login").post(
  function(req, res, next) {
    console.log("LOGIN BODY", req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("LOGGED IN", req.user, req.session);
    res.json(req.user._id);
  }
);

module.exports = router;
