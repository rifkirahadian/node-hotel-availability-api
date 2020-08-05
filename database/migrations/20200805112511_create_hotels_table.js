
exports.up = function (knex) {
  return knex.schema
    .createTable('hotels', function (table) {
      table.increments('id')
      table.string('hotel_name', 150).notNullable()
      table.text('address').notNullable()
      table.timestamps()
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
