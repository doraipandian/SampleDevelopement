const express = require('express')
const apiTaskController = require('../controllers/apiTaskController')

const router = express.Router();

router.get('/user/:userid', apiTaskController.get_tasks_by_user_id)
router.get('/', apiTaskController.get_tasks)
router.get('/:id', apiTaskController.get_task_byId)
router.post('/', apiTaskController.post_tasks)
router.delete('/:id', apiTaskController.delete_task_byId)

module.exports = router;