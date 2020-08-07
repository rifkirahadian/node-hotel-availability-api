import { body } from 'express-validator'

export const createReservationValidate = [
  body(['roomsId']).notEmpty().withMessage('Room id required'),
  body(['roomsId']).isArray().withMessage('Rooms id must be an array'),
  body(['customerName']).notEmpty().withMessage('customerName required'),
  body(['guestName']).notEmpty().withMessage('guestName required'),
  body(['checkinDate']).notEmpty().withMessage('checkinDate required'),
  body(['checkoutDate']).notEmpty().withMessage('checkoutDate required')
]
