const router = require("express").Router();
const { eventController } = require("../../controllers");

// routes to /api/events/
// GET convenience function to find all events
// POST convenience function to create new events
router
  .route("/sessionUser/groups/events")
  .get(eventController.findAll)
  .post(eventController.create);

// router.route("/byGroupActivities").get(eventController.byGroupActivities);

// // route to /api/events
// router.route("/events").post(activitiesController.create);

module.exports = router;
