import { Hotel } from '../models/Hotel'

export const saveHotel = async (hotelName, address) => {
  await Hotel.create({
    hotel_name: hotelName,
    address
  })
}
