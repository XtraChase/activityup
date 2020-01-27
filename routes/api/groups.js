const router = require("express").Router();
const { groupController } = require("../../controllers");

// routes to /api/groups/
// GET convenience function to find all groups
// POST convenience function to create new groups
router.route("/")
    .get(groupController.findAll)
    .post(groupController.create);

//route to /api/groups
router.route("/groups").post(groupController.create);

module.exports = router;