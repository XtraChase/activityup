const router = require("express").Router();
const axios = require("axios");

router.route("/tmevents").get(async (req, res) => {
  const events = await axios.get(
    "https://app.ticketmaster.com/discovery/v2/events.json?apikey=zfiyUNmT9IxDeM95i1L8aXyC5vKaVLkd"
  );

  try {
    // console.log("events", events.data);
    let filtered = events.data._embedded.events.filter(
      (e, i, arr) => i === arr.findIndex(item => e.name === item.name)
    );
    filtered.forEach(e => {
      e.images = e.images.filter(img => img.width > 500);
    });
    res.json(filtered);
  } catch (err) {
    console.log(err);
    res.status(422).json(err);
  }
});

router.route("/geekevents").get(async (req, res) => {
  const events = await axios.get(
    `https://api.seatgeek.com/2/events?type=${req.query.type}&client_id=MjA1NDQ0MDR8MTU4MDU3NTc4MC4wOQ&client_secret=3bbf40538c93bcf935c817e740316407d450a6a2514173d76e0995bd7d50a674`
  );

  try {
    console.log("events", events.data);
    res.json(events.data);
  } catch (err) {
    console.log(err);
    res.status(422).json(err);
  }
});

module.exports = router;
