import express, { Router } from 'express';
import addressEndpoints from './addressEndpoints';

const router = Router();

// /api/inscriptions/v1
export default function endpoints(): Router {
  router.use('/address', addressEndpoints());
  return router;
}
