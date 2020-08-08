import { createHotelValidate } from '../validationRules/hotel'
import { createHotel, getHotels, getHotel, hotelUpdate, hotelDelete } from '../controllers/HotelController'
import { createRoomValidate, createDynamicRoomPriceValidate } from '../validationRules/room'
import { createRoom, getRooms, updateRoom, deleteRoom, createDynamicRoomPrice } from '../controllers/RoomController'
import { createReservationValidate } from '../validationRules/reservation'
import { createReservation, hotelRoomsAvailable } from '../controllers/ReservationController'

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
  apiRoutes.post('/room/dynamic/price', createDynamicRoomPriceValidate, createDynamicRoomPrice)

  apiRoutes.post('/reservation', createReservationValidate, createReservation)
  apiRoutes.get('/hotel/rooms/available', hotelRoomsAvailable)

  app.use('/api', apiRoutes)
}
