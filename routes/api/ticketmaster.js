const router = require("express").Router();
const axios = require("axios");

router.route("/adevents").get(async (req, res) => {
  const events = await axios.get(
    "https://app.ticketmaster.com/discovery/v2/events.json?apikey=zfiyUNmT9IxDeM95i1L8aXyC5vKaVLkd"
  );
  console.log("events", events.data)
  res.json(events.data._embedded.events);
});

module.exports = router;
