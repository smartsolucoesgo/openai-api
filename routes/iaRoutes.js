import { Router } from 'express';
import { body } from 'express-validator';
import requestValidator from '../middlewares/requestValidator.js';
import * as controller from '../controllers/iaController.js';

const router = Router();

router.post('/ask', body('apiKey').notEmpty(), body('question').notEmpty(), requestValidator, controller.ask);
router.post('/ask-assistant', body('apiKey').notEmpty(), body('question').notEmpty(), body('assistantId').notEmpty(), requestValidator, controller.askAssistant);

export default router