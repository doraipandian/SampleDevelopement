const db = require('../database')

const Tasks = db.tasks;

const get_tasks = async (req, res) =>{   
    try {
        let result = await Tasks.findAll({order: [['id', 'desc']]});
       // console.log(result);
        res.send(result);
    } catch (error) {
        //console.log(error);
        res.status(500).send(error);
    }
};

const get_task_byId = async (req, res) =>{
    const id = req.params.id;
    try{
        let result = await Tasks.findOne({ where: { id: id }});
       // console.log(result);
        res.send(result);
    } catch (error) {
        //console.log(error);
        res.status(500).send(error);
    }
};

const get_tasks_by_user_id = async (req, res) =>{   
    const userid = req.params.userid;
    try {
        let result = await Tasks.findAll({ where:{ userid: userid }, order: [['id', 'desc']]});
        //console.log(result);
        res.send(result);
    } catch (error) {
        //console.log(error);
        res.status(500).send(error);
    }
};

const post_tasks =  async (req, res)=>{
    const id = req.body.id;
    const data = {  title:req.body.title, task:req.body.task, userid:req.body.userid, modifiedby:req.body.modifiedby};
    try{ 
        let result ;
        if (id !== null && id > 0) {
            //saving the task
            result = await Tasks.update(data, { where: { id: id } });
        } else {
            //creating the task
            result = await Tasks.create(data);
        }
        res.send(result);      
    } catch (error) {
        //console.log(error);
        res.status(500).send(error);
    }
};

const delete_task_byId = async (req, res) =>{
    const id = req.params.id;
    try{
        const result = await Tasks.destroy({ where: { id: id }});
       //console.log(result);
       res.status(200).send({'redirect':'tasks'});
    } catch (error) {
        //console.log(error);        
        res.status(500).send(error);
    }
};

module.exports = {get_tasks, get_task_byId, post_tasks, delete_task_byId, get_tasks_by_user_id}