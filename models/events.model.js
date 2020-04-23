const connection = require("../db/connection");

exports.fetchEvents = (offset) => {
  return connection
    .select("*")
    .from("gola_info")
    .limit(5)
    .offset(offset)
    .then((result) => result);
};
