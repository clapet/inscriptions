import { NextFunction, Request, Response } from 'express';
import { validate } from 'bitcoin-address-validation';

export default function btcAddressValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const addressId = req.params.addressId;
  const isValid = validate(addressId);
  if (!isValid) {
    res.locals.statusCode = 400;
    return next(new Error('Invalid BTC address'));
  }
  next();
}
