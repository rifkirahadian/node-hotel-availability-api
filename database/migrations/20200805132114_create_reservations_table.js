
exports.up = function (knex) {
  return knex.schema
    .createTable('reservations', function (table) {
      table.increments('id')
      table.string('order_id', 20).notNullable()
      table.string('customer_name').notNullable()
      table.date('checkin_date').notNullable()
      table.date('checkout_date').notNullable()
      table.integer('hotel_id').unsigned().notNullable()
      table.foreign('hotel_id').references('id').inTable('hotels')
      table.timestamps()
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('reservations')
}
