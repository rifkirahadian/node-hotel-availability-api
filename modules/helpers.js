import { validationResult } from 'express-validator'
import { formErrorValidationResponse } from './responser'

// validation form handle
export const formValidate = (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    throw formErrorValidationResponse(errors.array(), res)
  }
}
