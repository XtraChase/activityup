const router = require("express").Router();
const { userController } = require("../../controllers");

router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

router
  .route("/one/")
  .get(userController.findOne)

module.exports = router;
