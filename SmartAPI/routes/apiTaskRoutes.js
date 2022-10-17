const express = require('express')
const apiTaskController = require('../controllers/apiTaskController')

const router = express.Router();

router.get('/', apiTaskController.get_tasks)
router.get('/:id', apiTaskController.get_task_byId)
router.post('/', apiTaskController.post_tasks)
router.delete('/:id', apiTaskController.delete_task_byId)

module.exports = router;