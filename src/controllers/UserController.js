import { validationResult } from 'express-validator/check';
import { matchedData } from 'express-validator/filter';

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
}

export default UserController;