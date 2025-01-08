import { Router } from 'express';
import getInscriptions from '../routes/address/getInscriptions';
import getInscriptionById from '../routes/address/getInscriptionById';

// /api/inscriptions/v1/address
export default function addressEndpoints(): Router {
  const router = Router();
  router.get(
    '/:addressId/ordinal-utxo',
    // TODO: add input validation for address
    getInscriptions
  );
  router.get(
    '/:addressId/inscriptions/:inscriptionId',
    // TODO: add input validation for address
    getInscriptionById
  );
  return router;
}
