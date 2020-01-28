const router = require("express").Router();
const { groupController } = require("../../controllers");

// routes to /api/groups/
// GET convenience function to find all groups
// POST convenience function to create new groups
router.route("/sessionUser/groups")
    .get(groupController.findAll)
    .post(groupController.create);

router.route("/byUser")
    .get(groupController.byUser)

//route to /api/groups
router.route("/groups").post(groupController.create);

//route to /api/users/sessionUser/groups
router.route("/sessionUser/groups").post(groupController.createGroup);

module.exports = router;
