import { createHotelValidate } from '../validationRules/hotel'
import { createHotel, getHotels, getHotel, hotelUpdate } from '../controllers/HotelController'

module.exports = (app, express) => {
  const apiRoutes = express.Router()

  apiRoutes.post('/hotel', createHotelValidate, createHotel)
  apiRoutes.get('/hotels', getHotels)
  apiRoutes.get('/hotel/:id', getHotel)
  apiRoutes.put('/hotel/:id', createHotelValidate, hotelUpdate)

  app.use('/api', apiRoutes)
}
