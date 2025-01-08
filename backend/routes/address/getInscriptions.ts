import { NextFunction, Request, Response } from 'express';
import axios from 'axios';

// /api/inscriptions/v1/address/:address/ordinal-utxo
export default async function getInscriptions(req: Request, res: Response) {
  // get the address from the request
  const addressId = req.params.addressId;
  // parse the response as json
  const response = await axios.get(
    `https://api-3.xverse.app/v1/address/${addressId}/ordinal-utxo`
  );
  // TODO: handle error
  if (response.status !== 200) {
    console.error('Failed to fetch data', response.status, response.data);
    return res.status(response.status).json({ error: 'Failed to fetch data' });
  }
  const results = response.data;
  return res.json(results);
}
