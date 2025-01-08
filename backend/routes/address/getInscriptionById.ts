import { NextFunction, Request, Response } from 'express';
import axios from 'axios';
import getInscriptionsByIdSvc from '../../services/getInscriptionsByIdSvc';

export default async function getInscriptionById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const addressId = req.params.addressId;
  const inscriptionId = req.params.inscriptionId;
  try {
    const inscription = await getInscriptionsByIdSvc(addressId, inscriptionId);
    res.status(200).json(inscription);
  } catch (error) {
    res.locals.statusCode = 500;
    return next(new Error('Failed to fetch data'));
  }
}
