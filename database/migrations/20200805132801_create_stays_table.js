
exports.up = function (knex) {
  return knex.schema
    .createTable('stays', function (table) {
      table.increments('id')
      table.integer('reservation_id').unsigned().notNullable()
      table.foreign('reservation_id').references('id').inTable('reservations')
      table.string('guest_name')
      table.timestamps()
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('stays')
}
