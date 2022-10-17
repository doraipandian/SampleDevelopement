const axios = require('axios');

module.exports.login_post = (req, res) => {
    //console.log(req.body);
    session = req.session;
    
    axios.get(`http://localhost:3000/api/users/${req.body.username}/${req.body.password}`)
    .then(function(response){
        //console.log(response.data)
        let user = response.data;
        if(user.id > 0){
            session = req.session;
            session.userid = user.id;
            session.userName = user.username;

            //console.log(req.session)
            res.redirect('/');
        }
        else{
            res.send('Invalid username or password');
        }
    })
    .catch(err =>{
        res.send(err);
    })
};
