// model for users table
import knex from '../configs/knex'
import bookshelf from 'bookshelf'
import bookshelfModelbase from 'bookshelf-modelbase'

const bookshelfModel = bookshelf(knex)
bookshelfModel.plugin(bookshelfModelbase.pluggable)

export default bookshelfModel.model('DynamicRoomPrice', {
  tableName: 'dynamic_room_price'
})
