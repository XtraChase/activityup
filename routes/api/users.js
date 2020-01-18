const router = require("express").Router();
const { User } = require("../../models");

router.route("/").get((req, res) => {
  User.find({}).then(data => {
    console.log(data);
    res.json(data);
  });
});

module.exports = router;
