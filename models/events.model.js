const connection = require("../db/connection");

exports.fetchEvents = (offset) => {
  return connection
    .select("*")
    .from("gola_info")
    .limit(10)
    .offset(offset)
    .then((result) => result);
};
