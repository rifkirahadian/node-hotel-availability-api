import { formValidate } from '../modules/helpers'
import { errorResponseHandle, successResponse } from '../modules/responser'
import { saveHotel, getHotelsData, getHotelById, setUpdateHotel } from '../modules/hotel'

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

export const getHotels = async (req, res) => {
  const data = await getHotelsData()

  return successResponse(res, data, null)
}

export const getHotel = async (req, res) => {
  try {
    const { id } = req.params
    const { hotel_name: hotelName, address } = await getHotelById(id, res)

    return successResponse(res, { hotelName, address }, null)
  } catch (error) {
    return errorResponseHandle(error, res)
  }
}

export const hotelUpdate = async (req, res) => {
  try {
    formValidate(req, res)
    const { id } = req.params

    await getHotelById(id, res)
    await setUpdateHotel(req, id)

    return successResponse(res, null, 'Hotel updated')
  } catch (error) {
    return errorResponseHandle(error, res)
  }
}
