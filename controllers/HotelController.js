import { formValidate } from '../modules/helpers'
import { errorResponseHandle, successResponse } from '../modules/responser'
import { saveHotel } from '../modules/hotel'

export const createHotel = async (req, res) => {
  try {
    formValidate(req, res)
    const { hotelName, address } = req.body
    await saveHotel(hotelName, address)

    return successResponse(res, null, 'Hotel added')
  } catch (error) {
    return errorResponseHandle(error, res)
  }
}
