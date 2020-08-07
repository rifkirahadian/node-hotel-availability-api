import { body } from 'express-validator'

// create hotel validation rule
export const createHotelValidate = [
  body(['hotelName']).notEmpty().withMessage('Hotel Name required'),
  body(['address']).notEmpty().withMessage('Address required'),
  body(['defaultRoomPrice']).notEmpty().withMessage('Default room price required')
]
