import { formValidate } from '../modules/helpers'
import { errorResponseHandle, successResponse } from '../modules/responser'
import { getHotelById } from '../modules/hotel'
import { saveRoom, getRoomsDataByHotelId, setUpdateRoom, getRoomById, setDeleteRoom } from '../modules/room'

export const getRooms = async (req, res) => {
  try {
    const { hotelId } = req.query
    await getHotelById(hotelId, res)
    const data = await getRoomsDataByHotelId(hotelId)

    return successResponse(res, data, null)
  } catch (error) {
    return errorResponseHandle(error, res)
  }
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

export const updateRoom = async (req, res) => {
  try {
    formValidate(req, res)
    const { id } = req.params
    const { hotelId, roomNumber } = req.body

    // validate room and hotel id
    await Promise.all([
      getHotelById(hotelId, res),
      getRoomById(id, res)
    ])

    await setUpdateRoom(hotelId, roomNumber, id)

    return successResponse(res, null, 'Room updated')
  } catch (error) {
    return errorResponseHandle(error, res)
  }
}

export const deleteRoom = async (req, res) => {
  try {
    const { id } = req.params
    await getRoomById(id, res)

    await setDeleteRoom(id)

    return successResponse(res, null, 'Room deleted')
  } catch (error) {
    return errorResponseHandle(error, res)
  }
}