const router = require("express").Router();
const { activityController } = require("../../controllers");

// routes to /api/activities/
// GET convenience function to find all activitys
// POST convenience function to create new activitys
router
  .route("/sessionUser/groups/events/activities")
  .get(activityController.findAll)
  .post(activityController.create);

// router.route("/byGroupActivities").get(activityController.byGroupActivities);

// // route to /api/activities
// router.route("/activities").post(activitiesController.create);

module.exports = router;
