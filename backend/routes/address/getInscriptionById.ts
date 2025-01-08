import { Request, Response } from 'express';
import axios from 'axios';

export default async function getInscriptionById(req: Request, res: Response) {
  const addressId = req.params.addressId;
  const inscriptionId = req.params.inscriptionId;
  const url = `https://api-3.xverse.app/v1/address/${addressId}/ordinals/inscriptions/${inscriptionId}`;
  const response = await axios.get(url);
  const inscription = response.data;
  res.status(200).json(inscription);
}
