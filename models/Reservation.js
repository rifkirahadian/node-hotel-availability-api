// model for users table
import knex from '../configs/knex'
import bookshelf from 'bookshelf'
import bookshelfEloquent from 'bookshelf-eloquent'
import Stay from './Stay'

const bookshelfModel = bookshelf(knex)
bookshelfModel.plugin(bookshelfEloquent)

export default bookshelfModel.model('Reservation', {
  tableName: 'reservations',
  stays () {
    return this.hasMany(Stay)
  }
})
