import { validationResult } from 'express-validator/check';
import { matchedData } from 'express-validator/filter';
import { UnknownServerError } from '../util/UnknownServerError';

class UserController {
    static async login(req, res) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.mapped() });
        }
       
        // matchedData returns only the subset of data validated by the middleware
        const user = matchedData(req);

        res.send(JSON.stringify(user))
    }

    static async register(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
              return res.status(422).json({ errors: errors.mapped() });
            }
           
            // matchedData returns only the subset of data validated by the middleware
            const user = matchedData(req);
                

            res.send(JSON.stringify(user))
        } catch (error) {
            res.status(500).send( new UnknownServerError(error).getMessage() )
        }

    }
}

export default UserController;