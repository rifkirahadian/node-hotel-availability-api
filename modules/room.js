import { Room } from '../models/Room'

export const getRoomsDataByHotelId = async (hotelId) => {

}

export const saveRoom = async (roomNumber, hotelId) => {
  await Room.create({
    room_number: roomNumber,
    hotel_id: hotelId
  })
}
