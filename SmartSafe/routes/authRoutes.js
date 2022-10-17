const { Router } = require('express')
const authController = require('../controllers/authController')
const authService = require('../services/authService')

const router = Router();

router.get('/', authController.login_get);
router.post('/', authService.login_post);

module.exports = router;