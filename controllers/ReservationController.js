import { errorResponseHandle, successResponse } from '../modules/responser'
import { formValidate } from '../modules/helpers'
import { roomIdValidate, roomsAvailableCheck, createStayAndStayRoom, setCreateReservation } from '../modules/reservation'

export const createReservation = async (req, res) => {
  try {
    formValidate(req, res)
    const { roomsId, customerName, guestName, checkinDate, checkoutDate } = req.body

    const rooms = await roomIdValidate(roomsId, res)
    await roomsAvailableCheck(roomsId, checkinDate, checkoutDate, res)

    const reservation = await setCreateReservation(checkinDate, checkoutDate, customerName, rooms[0].hotel_id)
    await createStayAndStayRoom(guestName, roomsId, reservation)

    return successResponse(res, reservation, 'Reservation succeed')
  } catch (error) {
    return errorResponseHandle(error, res)
  }
}
