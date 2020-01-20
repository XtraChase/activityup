const router = require("express").Router();
const { groupController } = require("../../controllers");

router.route("/")
    .get(groupController.findAll)
    .post(groupController.create);

module.exports = router;
