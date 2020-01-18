const router = require("express").Router();
const { userController } = require("../../controllers");

router.route("/").get(userController.findAll);

module.exports = router;
