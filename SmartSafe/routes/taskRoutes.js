const { Router } = require('express')
const taskController = require('../controllers/taskController')

const router = Router();

router.get('/user/:userid', taskController.get_tasks_user_id);
router.get('/', taskController.get_tasks);
router.get('/:id', taskController.get_task_byId);
router.post('/', taskController.post_tasks);


module.exports = router;
