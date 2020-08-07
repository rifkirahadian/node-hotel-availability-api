import Room from '../models/Room'
import { errorResponse } from './responser'
import DynamicRoomPrice from '../models/DynamicRoomPrice'
import moment from 'moment'

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

export const setDynamicRoomPrice = async (dates, price, roomId) => {
  const queries = dates.map(item => {
    return DynamicRoomPrice.upsert({
      room_id: roomId,
      date: item
    }, {
      price
    }, {})
  })
  await Promise.all(queries)
}

export const getDates = (startDate, endDate, res) => {
  if (!moment(endDate).isAfter(startDate)) {
    throw errorResponse(res, 'End date must be greater than start date')
  }

  startDate = moment(startDate, 'YYYY-MM-DD')
  endDate = moment(endDate, 'YYYY-MM-DD')

  const dateDiff = moment.duration(endDate.diff(startDate)).asDays()
  const dates = [moment(startDate).format('YYYY-MM-DD')]
  for (let index = 1; index < (dateDiff + 1); index++) {
    const selectedDate = moment(startDate).add(index, 'day').format('YYYY-MM-DD')
    dates.push(
      selectedDate
    )
  }

  return dates
}
