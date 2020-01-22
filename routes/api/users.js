const router = require("express").Router();
const { userController } = require("../../controllers");
const passport = require("../../passport");

router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

router.route("/one/").get(userController.findOne);

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
