import { createHotelValidate } from '../validationRules/hotel'
import { createHotel, getHotels, getHotel, hotelUpdate, hotelDelete } from '../controllers/HotelController'
import { createRoomValidate } from '../validationRules/room'
import { createRoom } from '../controllers/RoomController'

module.exports = (app, express) => {
  const apiRoutes = express.Router()

  apiRoutes.post('/hotel', createHotelValidate, createHotel)
  apiRoutes.get('/hotels', getHotels)
  apiRoutes.get('/hotel/:id', getHotel)
  apiRoutes.put('/hotel/:id', createHotelValidate, hotelUpdate)
  apiRoutes.delete('/hotel/:id', hotelDelete)

  apiRoutes.post('/room', createRoomValidate, createRoom)

  app.use('/api', apiRoutes)
}
