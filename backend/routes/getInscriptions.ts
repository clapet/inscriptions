import { NextFunction, Request, Response } from 'express';
import axios from 'axios';

// /api/inscriptions/v1/address/:address/ordinal-utxo
export default async function getInscriptions(req: Request, res: Response) {
  // get the address from the request
  const address = req.params.address;
  // parse the response as json
  const response = await axios.get(
    `https://api-3.xverse.app/v1/address/${address}/ordinal-utxo`
  );
  const results = response.data;
  return res.json(results);
}
