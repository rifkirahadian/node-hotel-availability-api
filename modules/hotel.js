import { Hotel } from '../models/Hotel'
import { errorResponse } from './responser'

export const saveHotel = async (hotelName, address, defaultRoomPrice) => {
  await Hotel.create({
    hotel_name: hotelName,
    address,
    default_room_price: defaultRoomPrice
  })
}

export const getHotelsData = async () => {
  return await Hotel.fetchAll({ columns: ['id', 'hotel_name', 'address', 'default_room_price'] })
}

export const getHotelById = async (id, res) => {
  try {
    return await Hotel.findById(id)
  } catch (error) {
    throw errorResponse(res, 'Hotel not found')
  }
}

export const setUpdateHotel = async (req, id) => {
  const { hotelName, address, defaultRoomPrice } = req.body
  await Hotel.update({
    hotel_name: hotelName,
    address,
    default_room_price: defaultRoomPrice
  }, { id })
}

export const setDeleteHotel = async (id) => {
  await Hotel.destroy({ id })
}
