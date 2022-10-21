const { Router } = require('express')
const authController = require('../controllers/authController')
const authService = require('../services/authService')

const router = Router();

router.get('/login', authController.login_get);
router.post('/login', authService.login_post);

router.get('/signup', authController.signup_get);
router.post('/signup', authService.signup_post);

router.get('/', authController.login_get);

module.exports = router;