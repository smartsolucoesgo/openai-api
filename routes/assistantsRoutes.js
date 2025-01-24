import { Router } from 'express';
import { body } from 'express-validator';
import requestValidator from '../middlewares/requestValidator.js';
import * as controller from '../controllers/assistantsController.js';

const router = Router();

router.post('/create', body('apiKey').notEmpty(), body('model').notEmpty(), body('name').notEmpty(), body('instructions').notEmpty(), body('temperature').notEmpty(), body('response_format').notEmpty(), requestValidator, controller.create);

router.put('/edit', body('apiKey').notEmpty(), body('assistantId').notEmpty(), requestValidator, controller.edit);

router.delete('/delete', body('apiKey').notEmpty(), body('assistantId').notEmpty(), requestValidator, controller.deleteAssistant);


export default router