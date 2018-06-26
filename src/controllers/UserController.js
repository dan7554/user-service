import { validationResult } from 'express-validator/check';
import { matchedData } from 'express-validator/filter';
import UserClient from '../client/UserClient';
import UnknownServerError from '../util/UnknownServerError';
import UpstreamError from '../util/UpstreamError';
import ValidationError from '../util/ValidationError';

class UserController {
    static async login(req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.mapped() });
        }

        const user = matchedData(req);
        res.send(JSON.stringify(user))
    }

    static async register(req, res) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                throw new ValidationError(errors.mapped());
            }

            const user = matchedData(req);
            const registerResponse = await UserClient.register(user);

            res.json(registerResponse);

        } catch (error) {
            if ( error instanceof UpstreamError ) {
                res.status(500).send(error.getMessage())
            } else if ( error instanceof ValidationError ) {
                res.status(422).send(error.getMessage())
            } else  {
                res.status(500).send(new UnknownServerError(error).getMessage())
            }
        }
       
    }
}

export default UserController;