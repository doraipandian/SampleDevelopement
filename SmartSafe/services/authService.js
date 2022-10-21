const axios = require('axios');

module.exports.login_post = (req, res) => {
    //console.log(req.body);
    
    axios.get(`http://localhost:3000/api/users/${req.body.username}/${req.body.password}`)
    .then(function(response){
        //console.log(response.data)
        let user = response.data;
        if(user.id > 0){
            session = req.session;
            req.session.userid = user.id;
            req.session.username = user.firstname +' '+user.lastname;
            req.session.usertype = user.usertype;

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

module.exports.signup_post = async (req, res) => {
    //check the existance of email
    let email = req.body.email;
    let result = await axios.get(`http://localhost:3000/api/users/email/${email}`);
    
    if (result.data !== null && result.data !== ''){
        //console.log(result);
        res.send('Email is already exist');
    } else {
    
        let usertype = (req.body.usertype) ? req.body.usertype : 0;
        // build user 
        let user = {
            username : req.body.username,
            password : req.body.password,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            usertype : usertype
        };

        await axios.post('http://localhost:3000/api/users', user)
        .then((result)=>{
            if (result.status >= 400) {
                console.log(result.status);
                throw new Error("Bad response from server");
            } else{
                //console.log(result.data)
                res.redirect('/home');
            }
        })
        .catch(err =>{
            res.send(err);
        });
    }
};