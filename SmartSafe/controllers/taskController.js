const axios = require('axios');
const session = require('express-session');

module.exports.get_tasks = async (req, res) => {
    if (req.session.userName == null){
        res.redirect('/');
    }
    await axios.get('http://localhost:3000/api/tasks')
    .then((result)=>{
      if (result.status >= 400) {
          console.log(result.status);
          throw new Error("Bad response from server");
      } else{
          console.log(result.data)
          res.render('taskList',{tasks:result.data});
      }
    })
    .catch(err =>{
        res.send(err);
    });
}

module.exports.get_task_byId = async (req, res) => {

    await axios.get(`http://localhost:3000/api/tasks/${req.params.id}`)
    .then((result)=>{
      if (result.status >= 400) {
          console.log(result.status);
          throw new Error("Bad response from server");
      } else{
          //console.log(result.data)
          res.render('task',{task:result.data});
      }
    })
    .catch(err =>{
        res.send(err);
    });
}

module.exports.post_tasks = async (req, res) => {

    let task = {
        title: req.body.title,
        task: req.body.task,
        userid: req.session.userid
    }
    if(req.body.id !== null && req.body.id > 0){
        task.id = req.body.id;
    }
    //console.log(task);
    await axios.post('http://localhost:3000/api/tasks/', task)
        .then((result)=>{        
            if (result.status >= 400) {
                console.log(result.status);
                throw new Error("Bad response from server");
            } else{
                res.redirect('tasks');
            }
        })
        .catch(err =>{
            res.send(err);
        });
}

module.exports.delete_task_byId = async (req, res) => {

    await axios.delete(`http://localhost:3000/api/tasks/${req.params.id}`)
    .then((result)=>{
        if (result.status >= 400) {
            console.log(result.status);
            throw new Error("Bad response from server");
        } else{
            res.redirect('tasks');
        }
    })
    .catch(err =>{
        res.send(err);
    });
}
