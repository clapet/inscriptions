import { Router } from 'express';
import getInscriptions from '../routes/getInscriptions';

// /api/inscriptions/v1/address
export default function addressEndpoints(): Router {
  const router = Router();
  router.get(
    '/:address/ordinal-utxo',
    // TODO: add input validation for address
    getInscriptions
  );
  return router;
}
