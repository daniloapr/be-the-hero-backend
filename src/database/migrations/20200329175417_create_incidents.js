exports.up = function(knex) {
  return knex.schema.createTable("incidents", function(table) {
    table.string("id").primary();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.integer("value").notNullable(); //integer in cents
    table.string("ong_id").notNullable();
    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};
