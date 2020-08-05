import { formValidate } from '../modules/helpers'
import { errorResponseHandle, successResponse } from '../modules/responser'
import { getHotelById } from '../modules/hotel'
import { saveRoom } from '../modules/room'

export const getRooms = async (req, res) => {

}

export const createRoom = async (req, res) => {
  try {
    const { hotelId, roomNumber } = req.body
    formValidate(req, res)
    await getHotelById(hotelId, res)
    await saveRoom(roomNumber, hotelId)

    return successResponse(res, null, 'Room saved')
  } catch (error) {
    return errorResponseHandle(error, res)
  }
}
