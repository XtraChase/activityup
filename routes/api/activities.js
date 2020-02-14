const router = require("express").Router();
const { activityController } = require("../../controllers");

// routes to /api/activities/
// GET convenience function to find all activitys
// POST convenience function to create new activitys
router
  .route("/activities")
  .get(activityController.findAll)
  .post(activityController.create)
  .put(activityController.upvote);

router.route("/byEvent").get(activityController.byEvent);

// route to /api/activities
router.route("/activities").post(activityController.create);

module.exports = router;
