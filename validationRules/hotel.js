import { body } from 'express-validator'

// register validation rule
export const createHotelValidate = [
  body(['hotelName']).notEmpty().withMessage('Hotel Name required'),
  body(['address']).notEmpty().withMessage('Address required')
]
