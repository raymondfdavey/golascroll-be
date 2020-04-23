const data = require("../data/index");
exports.seed = function (knex) {
  console.log("seeding");

  return knex.migrate
    .rollback()
    .then(() => {
      return knex.migrate.latest();
    })
    .then(() => {
      return knex("gola_info").insert(data).returning("*");
    })
    .catch((err) => console.log(err));
};
