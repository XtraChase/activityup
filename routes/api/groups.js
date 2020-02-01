const router = require("express").Router();
const { groupController } = require("../../controllers");

// routes to /api/groups/
// GET convenience function to find all groups
// POST convenience function to create new groups

// http://localhost:3000/api/groups/sessionUser/groups
router
  .route("/sessionUser/groups")
  .get(groupController.findAll)
  .post(groupController.create);

router.route("/byUser").get(groupController.byUser);

//route to /api/groups
router.route("/groups").post(groupController.create);

module.exports = router;
