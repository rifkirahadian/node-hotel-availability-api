import { createHotelValidate } from '../validationRules/hotel'
import { createHotel } from '../controllers/HotelController'

module.exports = (app, express) => {
  const apiRoutes = express.Router()

  apiRoutes.post('/hotel', createHotelValidate, createHotel)

  app.use('/api', apiRoutes)
}
