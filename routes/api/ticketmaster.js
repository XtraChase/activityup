const router = require("express").Router();
const axios = require("axios");

router.route("/adevents").get(async (req, res) => {
  const events = await axios.get(
    "https://app.ticketmaster.com/discovery/v2/events.json?apikey=zfiyUNmT9IxDeM95i1L8aXyC5vKaVLkd"
  );
  console.log("events", events.data)
  res.json(events.data._embedded.events);
});

router.route("/geekevents").get(async (req, res) => {
  const events = await axios.get(
"https://api.seatgeek.com/2/events?client_id=MjA1NDQ0MDR8MTU4MDU3NTc4MC4wOQ&client_secret=3bbf40538c93bcf935c817e740316407d450a6a2514173d76e0995bd7d50a674"  );
  console.log("events", events.data)
  res.json(events.data);
});

module.exports = router;
