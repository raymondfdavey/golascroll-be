const { fetchEvents } = require("../models/events.model.js");

exports.getEvents = (req, res, next) => {
  console.log("IN SONTROLLED");
  const { offset } = req.query;
  console.log(offset);

  fetchEvents(offset).then((events) => res.status(200).send({ events }));
};
