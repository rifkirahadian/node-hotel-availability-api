
exports.up = function (knex) {
  return knex.schema
    .createTable('dynamic_room_price', function (table) {
      table.increments('id')
      table.integer('room_id').unsigned().notNullable()
      table.foreign('room_id').references('id').inTable('rooms')
      table.date('start_date')
      table.date('end_date')
      table.integer('price')
      table.timestamps()
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('dynamic_room_price')
}
