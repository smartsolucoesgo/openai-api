import { Router } from 'express';
import response from './response.js';

import assistantsRoutes from './routes/assistantsRoutes.js';
import iatRoutes from './routes/iaRoutes.js';

const router = Router();

router.use('/assistants', assistantsRoutes);
router.use('/ia', iatRoutes);

router.all('*', (req, res) => {
    response(res, 200, true, 'Api Ativa, aproveite. :)')
})

export default router