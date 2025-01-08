import { Router } from 'express';
import btcAddressValidator from '../middlewares/btcAddressValidator';
import getInscriptions from '../routes/address/getInscriptions';
import getInscriptionById from '../routes/address/getInscriptionById';

// /api/inscriptions/v1/address
export default function addressEndpoints(): Router {
  const router = Router();
  router.get('/:addressId/ordinal-utxo', btcAddressValidator, getInscriptions);
  router.get(
    '/:addressId/inscriptions/:inscriptionId',
    btcAddressValidator,
    getInscriptionById
  );
  return router;
}
