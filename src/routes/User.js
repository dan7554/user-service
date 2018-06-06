import express from 'express';
import UserController from '../controllers/UserController'; 
import UserValidator from '../validators/UserValidator';

let router = express.Router();

router.post('/login', UserValidator, UserController.login );

module.exports = router;
