exports.up = function (knex) {
  console.log("rolling forward");
  return knex.schema.createTable("gola_info", (golaTable) => {
    golaTable.integer("day").notNullable();
    golaTable.text("month", "mediumtext").notNullable();
    golaTable.text("event1", "mediumtext");
    golaTable.text("link1", "mediumtext");
    golaTable.text("event2", "mediumtext");
    golaTable.text("link2", "mediumtext");
    golaTable.text("event3", "mediumtext");
    golaTable.text("link3", "mediumtext");
    golaTable.text("event4", "mediumtext");
    golaTable.text("link4", "mediumtext");
    golaTable.text("event5", "mediumtext");
    golaTable.text("link5", "mediumtext");
  });
};

exports.down = function (knex) {
  console.log("rolling back");

  return knex.schema.dropTable("gola_info");
};
