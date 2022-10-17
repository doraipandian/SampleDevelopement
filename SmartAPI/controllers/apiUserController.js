const db = require('../database')

const Users = db.users;

const api_users_get = async (req, res) =>{  
    try {
        let user = await Users.findAll();
        res.send(user);
    } catch (error) {
        //console.log(error);
        res.status(500).send(error);
    }
};

const api_users_post =  async (req, res)=>{
    //console.log(req.body);
    const {id, firstname, lastname, username, email, password, usertype } = req.body;
    const data = { firstname, lastname, username, email, password, usertype };
    //data validation needs to be done
    try {
        let result;
        if (id !== null && id > 0) {
             //saving the user
             result = await Users.update(data, { where: { id: id } });
        } else {
            //creating the user
            result = await Users.create(data);
        }
        res.send(result);
    } catch (error) {
        //console.log(error);
        res.status(500).send(error);
    }
};

const api_users_get_id = async (req, res)=>{
    const id = req.params.id;
    //console.log(id);  
    try{
        let result = await Users.findOne({ where: { id: id }});
       // console.log(result);
        res.send(result);
    } catch (error) {
        //console.log(error);        
        res.status(500).send(error);
    }
};

const api_user_get_by_credential = async (req, res)=>{
    const username = req.params.username;    
    const password = req.params.password;
    //console.log(req.params); 
    try{
        let result = await Users.findOne({ where: { username: username, password: password }});
        //console.log(JSON.stringify(result));
        res.send(result);
    } catch (error) {
        //console.log(error);        
        res.status(500).send(error);
    }
};

module.exports = {api_users_get, api_users_post, api_users_get_id, api_user_get_by_credential};