
exports.up = async function(knex) {
  await knex.schema.createTable("cats", (table) => {
      table.increments()
      table.text("name").unique().notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cats")
};
