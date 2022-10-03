/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex:any): Promise<void> {
    return knex.schema
    .createTable('users', function (table) {
      table.increments('id');
      table.string('username', 255).notNullable();
      // table.string('lastName', 255).notNullable();
      table.string('email', 255).unique().notNullable();
      table.string('password', 255).unique().notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex:any): Promise<void> {
    return knex.schema.dropTable('users');
};
