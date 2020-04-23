const apiRouter = require("express").Router();
const eventsRouter = require("./events.router.js");

apiRouter.get("/", (req, res) => console.log("getting to apiRouter"));

apiRouter.use("/events", eventsRouter);

module.exports = apiRouter;
