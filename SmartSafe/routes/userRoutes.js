const { Router } = require('express')
const userController = require('../controllers/userController')

const router = Router();

router.get('/', userController.get_users);
router.get('/:id', userController.get_users_byId);
router.post('/', userController.post_users);

module.exports = router;