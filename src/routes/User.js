import express from 'express';
import UserController from '../controllers/UserController'; 
import UserValidator from '../validators/User/UserValidator';
import RegisterValidator from '../validators/User/RegisterValidator';
import LogoutValidator from '../validators/User/LogoutValidator';

let router = express.Router();

router.post('/logout', LogoutValidator, UserController.logout );
router.post('/login', UserValidator, UserController.login );
router.post('/register', RegisterValidator, UserController.register );

module.exports = router;
