import { body } from 'express-validator'

// save room validation rule
export const createRoomValidate = [
  body(['roomNumber']).notEmpty().withMessage('Room number required'),
  body(['hotelId']).notEmpty().withMessage('hotelId required')
]

export const createDynamicRoomPriceValidate = [
  body(['roomId']).notEmpty().withMessage('Room id required'),
  body(['startDate']).notEmpty().withMessage('startDate required'),
  body(['endDate']).notEmpty().withMessage('endDate required'),
  body(['price']).notEmpty().withMessage('price required')
]
