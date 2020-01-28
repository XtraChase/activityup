const router = require("express").Router();
const userRoutes = require("./users");
const groupRoutes = require("./groups");
// const activityRoutes = require("./activities");

router.use("/users", userRoutes);
router.use("/groups", groupRoutes);
// router.use("/activities", activityRoutes);

module.exports = router;
