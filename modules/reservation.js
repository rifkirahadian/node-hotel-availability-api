import Reservation from '../models/Reservation'
import { errorResponse } from './responser'
import Room from '../models/Room'
import randomstring from 'randomstring'
import Stay from '../models/Stay'
import StayRoom from '../models/StayRoom'
import knex from '../configs/knex'

export const roomsAvailableCheck = async (roomsId, checkinDate, checkoutDate, res) => {
  const roomBookedCheck = await knex('reservations').where(q => {
    q.whereBetween('checkin_date', [checkinDate, checkoutDate])
      .orWhereBetween('checkout_date', [checkinDate, checkoutDate])
  })
    .join('stays', 'stays.reservation_id', '=', 'reservations.id')
    .join('stay_rooms', 'stay_id', '=', 'stays.id')
    .whereIn('room_id', roomsId)
    .first()

  if (roomBookedCheck) {
    throw errorResponse(res, 'Room Booked')
  }
}

export const roomIdValidate = async (roomsId, res) => {
  try {
    const roomsQuery = roomsId.map(item => {
      return Room.findById(item)
    })

    const rooms = await Promise.all(roomsQuery)

    return rooms.map(item => {
      return item.toJSON()
    })
  } catch (error) {
    throw errorResponse(res, 'Invalid room id')
  }
}

export const setCreateReservation = async (checkinDate, checkoutDate, customerName, hotelId) => {
  return await new Reservation({
    checkin_date: checkinDate,
    checkout_date: checkoutDate,
    customer_name: customerName,
    order_id: randomstring.generate(10),
    hotel_id: hotelId
  }).save()
}

export const createStayAndStayRoom = async (guestName, roomsId, reservation) => {
  const stay = await new Stay({
    reservation_id: reservation.id,
    guest_name: guestName
  }).save()

  const stayRoomQueries = roomsId.map(item => {
    return new StayRoom({
      stay_id: stay.id,
      room_id: item
    }).save()
  })

  await Promise.all(stayRoomQueries)
}
