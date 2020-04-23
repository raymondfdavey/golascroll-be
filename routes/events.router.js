const eventsRouter = require("express").Router();
const { getEvents } = require("../controllers/events.controller");

eventsRouter.route("/").get(getEvents);

module.exports = eventsRouter;
