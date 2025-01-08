import { NextFunction, Request, Response } from 'express';
import getInscriptionsSvc from '../../services/getInscriptionsSvc';

// /api/inscriptions/v1/address/:address/ordinal-utxo
export default async function getInscriptions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // get the address from the request
  const addressId = req.params.addressId;
  try {
    const response = await getInscriptionsSvc(addressId);
    return res.json(response);
  } catch (error) {
    res.locals.statusCode = 500;
    return next(new Error('Failed to fetch data'));
  }
}
