const router = require("express").Router();
const { groupController } = require("../../controllers");

// routes to /api/groups/
// GET convenience function to find all groups
// POST convenience function to create new groups
router.route("/")
    .get(groupController.findAll)
    .post(groupController.create);

router.route("/byUser")
    .get(groupController.byUser)

module.exports = router;
