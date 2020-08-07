import { formValidate } from '../modules/helpers'
import { errorResponseHandle, successResponse } from '../modules/responser'
import { saveHotel, getHotelsData, getHotelById, setUpdateHotel, setDeleteHotel } from '../modules/hotel'

export const createHotel = async (req, res) => {
  try {
    formValidate(req, res)
    const { hotelName, address, defaultRoomPrice } = req.body
    await saveHotel(hotelName, address, defaultRoomPrice)

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
    const { hotel_name: hotelName, address, default_room_price: defaultRoomPrice } = await getHotelById(id, res)

    return successResponse(res, { hotelName, address, defaultRoomPrice }, null)
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

export const hotelDelete = async (req, res) => {
  try {
    const { id } = req.params
    await getHotelById(id, res)
    await setDeleteHotel(id)

    return successResponse(res, null, 'Hotel Deleted')
  } catch (error) {
    return errorResponseHandle(error, res)
  }
}
