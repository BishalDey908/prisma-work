// src/routes/userRoutes.ts
import { Router } from 'express';
import roomModuleController from '../controllers/roomModuleController';

const router = Router();

router.get('/',roomModuleController);

export default router;