import { createHotelValidate } from '../validationRules/hotel'
import { createHotel, getHotels, getHotel, hotelUpdate, hotelDelete } from '../controllers/HotelController'
import { createRoomValidate } from '../validationRules/room'
import { createRoom, getRooms, updateRoom, deleteRoom } from '../controllers/RoomController'

module.exports = (app, express) => {
  const apiRoutes = express.Router()

  apiRoutes.post('/hotel', createHotelValidate, createHotel)
  apiRoutes.get('/hotels', getHotels)
  apiRoutes.get('/hotel/:id', getHotel)
  apiRoutes.put('/hotel/:id', createHotelValidate, hotelUpdate)
  apiRoutes.delete('/hotel/:id', hotelDelete)

  apiRoutes.post('/room', createRoomValidate, createRoom)
  apiRoutes.get('/rooms', getRooms)
  apiRoutes.put('/room/:id', createRoomValidate, updateRoom)
  apiRoutes.delete('/room/:id', deleteRoom)

  app.use('/api', apiRoutes)
}
