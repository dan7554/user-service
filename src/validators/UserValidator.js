import { check } from 'express-validator/check';
import base64 from 'base-64';

module.exports = [
    check('email')
        // Every validator method in the validator lib is available as a
        // method in the check() APIs.
        // You can customize per validator messages with .withMessage()
        .isEmail().withMessage('Must be an email')

        // Every sanitizer method in the validator lib is available as well!
        .trim()
        .normalizeEmail()

        // ...or throw your own errors using validators created with .custom()
        /*.custom(value => {
            return findUserByEmail(value).then(user => {
                throw new Error('this email is already in use'); 
           })
        })*/
    ,
    check('password', 'passwords must be at least 5 chars long and contain one number')
        .custom(value => {
            const decoded = base64.decode(value);
            let lengthCheck = decoded.length >= 5;
            let numCheck = decoded.match(/\d/) ? decoded.match(/\d/).length >= 1 : false;
            return lengthCheck && numCheck;
        }),
    
    // General error messages can be given as a 2nd argument in the check APIs
    /*check('password', 'passwords must be at least 5 chars long and contain one number')
        .isLength({ min: 5 })
        .matches(/\d/),*/

    // No special validation required? Just check if data exists:
    /*check('addresses.*.street').exists(),*/

    // Wildcards * are accepted!
    /*check('addresses.*.postalCode').isPostalCode(),*/

    // Sanitize the number of each address, making it arrive as an integer
   /*sanitize('addresses.*.number').toInt()*/
];