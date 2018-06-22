import express from 'express';
import UserController from '../controllers/UserController'; 
import UserValidator from '../validators/User/UserValidator';

let router = express.Router();

router.post('/login', UserValidator, UserController.login );
router.post('/register', UserValidator, UserController.login );

module.exports = router;
