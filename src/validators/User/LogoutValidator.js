import { header } from 'express-validator/check';


module.exports = [
    header('Authorization', 'This is an authenticated request').exists()
];