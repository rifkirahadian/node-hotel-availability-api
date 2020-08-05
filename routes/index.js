import { createHotelValidate } from '../validationRules/hotel'
import { createHotel, getHotels, getHotel, hotelUpdate, hotelDelete } from '../controllers/HotelController'

module.exports = (app, express) => {
  const apiRoutes = express.Router()

  apiRoutes.post('/hotel', createHotelValidate, createHotel)
  apiRoutes.get('/hotels', getHotels)
  apiRoutes.get('/hotel/:id', getHotel)
  apiRoutes.put('/hotel/:id', createHotelValidate, hotelUpdate)
  apiRoutes.delete('/hotel/:id', hotelDelete)

  app.use('/api', apiRoutes)
}
