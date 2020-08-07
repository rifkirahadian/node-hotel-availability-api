import { Room } from '../models/Room'
import { errorResponse } from './responser'

export const getRoomsDataByHotelId = async (hotelId) => {
  return Room.where('hotel_id', hotelId).fetchAll({ columns: ['id', 'room_number', 'room_status', 'hotel_id', 'price'] })
}

export const saveRoom = async (roomNumber, hotelId, price) => {
  await Room.create({
    room_number: roomNumber,
    hotel_id: hotelId,
    price
  })
}

export const setUpdateRoom = async (hotelId, roomNumber, price, id) => {
  await Room.update({
    hotel_id: hotelId,
    room_number: roomNumber,
    price
  }, { id })
}

export const getRoomById = async (id, res) => {
  try {
    const room = Room.findById(id)
    return room.toJSON()
  } catch (error) {
    throw errorResponse(res, 'Room not found')
  }
}

export const setDeleteRoom = async (id) => {
  await Room.destroy({ id })
}
