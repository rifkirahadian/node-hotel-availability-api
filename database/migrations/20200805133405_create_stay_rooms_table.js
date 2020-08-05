
exports.up = function (knex) {
  return knex.schema
    .createTable('stays', function (table) {
      table.increments('id')
      table.integer('stay_id').unsigned().notNullable()
      table.foreign('stay_id').references('id').inTable('stays')
      table.integer('room_id').unsigned().notNullable()
      table.foreign('room_id').references('id').inTable('rooms')
      table.timestamps()
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('stays')
}
