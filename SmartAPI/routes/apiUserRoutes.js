const express = require('express');
const router = express.Router();
const apiUserController = require('../controllers/apiUserController');

router.get('/email/:email',  apiUserController.api_user_get_by_email);
router.get('/', apiUserController.api_users_get);
router.get('/:id',  apiUserController.api_users_get_id);
router.get('/:username/:password',  apiUserController.api_user_get_by_credential);
router.post('/', apiUserController.api_users_post);

module.exports = router;