const express = require('express');
const router = express.Router();
const apiUserController = require('../controllers/apiUserController');

router.get('/', apiUserController.api_users_get);
router.post('/', apiUserController.api_users_post);
router.get('/:id',  apiUserController.api_users_get_id);
router.get('/:username/:password',  apiUserController.api_user_get_by_credential);

module.exports = router;