exports.up = function(knex) {
  return knex.schema.createTable("contacts", table => {
    table.increments("id").primary();
    table.string("first_name");
    table.string("last_name");
    table.string("job_title");
    table.string("address");
    table.string("phone_number");
    table.string("email");
    table.string("profile_picture");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("contacts");
};