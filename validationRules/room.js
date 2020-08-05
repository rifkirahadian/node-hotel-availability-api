import { body } from 'express-validator'

// save room validation rule
export const createRoomValidate = [
  body(['roomNumber']).notEmpty().withMessage('Room number required'),
  body(['hotelId']).notEmpty().withMessage('hotelId required')
]
