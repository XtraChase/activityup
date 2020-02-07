const router = require("express").Router();
const userRoutes = require("./users");
const groupRoutes = require("./groups");
const eventRoutes = require("./events");
const activityRoutes = require("./activities");
const thirdparty = require("./thirdparty")

router.use("/users", userRoutes);
router.use("/groups", groupRoutes);
router.use("/events", eventRoutes);
router.use("/activities", activityRoutes);
router.use("/thirdparty", thirdparty)

module.exports = router;
