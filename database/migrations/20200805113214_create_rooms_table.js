
exports.up = function (knex) {
  return knex.schema
    .createTable('rooms', function (table) {
      table.increments('id')
      table.string('room_number', 20).notNullable()
      table.enum('room_status', ['available', 'out of service']).notNullable().defaultTo('available')
      table.integer('price')
      table.integer('hotel_id').unsigned().notNullable()
      table.foreign('hotel_id').references('id').inTable('hotels')
      table.timestamps()
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('rooms')
}
