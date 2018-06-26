import express from 'express';
import UserController from '../controllers/UserController'; 
import UserValidator from '../validators/User/UserValidator';
import RegisterValidator from '../validators/User/RegisterValidator';

let router = express.Router();

router.post('/login', UserValidator, UserController.login );
router.post('/register', RegisterValidator, UserController.register );

module.exports = router;
