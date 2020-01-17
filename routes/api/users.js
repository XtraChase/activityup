const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({
        cool: "beans"
    })
})

module.exports = router;