import { formValidate } from '../modules/helpers'
import { errorResponseHandle, successResponse } from '../modules/responser'
import { getHotelById } from '../modules/hotel'
import { saveRoom, getRoomsDataByHotelId, setUpdateRoom, getRoomById, setDeleteRoom, setDynamicRoomPrice, getDates } from '../modules/room'

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
    const { hotelId, roomNumber, price } = req.body

    formValidate(req, res)

    await getHotelById(hotelId, res)
    await saveRoom(roomNumber, hotelId, price)

    return successResponse(res, null, 'Room saved')
  } catch (error) {
    return errorResponseHandle(error, res)
  }
}

export const updateRoom = async (req, res) => {
  try {
    formValidate(req, res)
    const { id } = req.params
    const { hotelId, roomNumber, price } = req.body

    // validate room and hotel id
    await Promise.all([
      getHotelById(hotelId, res),
      getRoomById(id, res)
    ])

    await setUpdateRoom(hotelId, roomNumber, price, id)

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

export const createDynamicRoomPrice = async (req, res) => {
  try {
    formValidate(req, res)
    const { roomId, startDate, endDate, price } = req.body
    await getRoomById(roomId, res)
    const dates = getDates(startDate, endDate, res)
    await setDynamicRoomPrice(dates, price, roomId)

    return successResponse(res, null, 'Dynamic room price added')
  } catch (error) {
    return errorResponseHandle(error, res)
  }
}
