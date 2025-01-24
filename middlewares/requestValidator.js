import { validationResult } from 'express-validator';
import response from './../response.js';

const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.error(errors.array());
        return response(res, 400, false, 'Por favor, preencha todos os dados necessários.');
    }

    next();
}

export default validate