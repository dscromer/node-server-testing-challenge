
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("cats").truncate()
  await knex("cats").insert([
    {name: "Archibald"},
    {name: "Old Man"},
    {name: "Ripley"},
    {name: "Lucas"},
  ])
};
