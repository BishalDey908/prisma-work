// src/routes/userRoutes.ts
import { Router } from 'express';
import bookingControllers from '../controllers/bookingController';

const router = Router();

router.get('/', bookingControllers);

export default router;