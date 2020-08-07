import { Room } from '../models/Room'
import { errorResponse } from './responser'

export const getRoomsDataByHotelId = async (hotelId) => {
  return Room.where('hotel_id', hotelId).fetchAll({ columns: ['id', 'room_number', 'room_status', 'hotel_id'] })
}

export const saveRoom = async (roomNumber, hotelId) => {
  await Room.create({
    room_number: roomNumber,
    hotel_id: hotelId
  })
}

export const setUpdateRoom = async (hotelId, roomNumber, id) => {
  await Room.update({
    hotel_id: hotelId,
    room_number: roomNumber
  }, { id })
}

export const getRoomById = async (id, res) => {
  try {
    return Room.findById(id)
  } catch (error) {
    throw errorResponse(res, 'Room not found')
  }
}

export const setDeleteRoom = async (id) => {
  await Room.destroy({ id })
}
