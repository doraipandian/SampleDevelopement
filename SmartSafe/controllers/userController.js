const axios = require('axios');

module.exports.get_users = async (req, res) => {
    await axios.get('http://localhost:3000/api/users')
    .then((result)=>{
      if (result.status >= 400) {
          console.log(result.status);
          throw new Error("Bad response from server");
      } else{
          //console.log(result.data)
          res.render('userList',{users:result.data});
      }
    })
    .catch(err =>{
        res.send(err);
    });
};

module.exports.get_users_byId = async (req, res) => {
  await axios.get(`http://localhost:3000/api/users/${req.params.id}`)
  .then((result)=>{
    if (result.status >= 400) {
        console.log(result.status);
        throw new Error("Bad response from server");
    } else{
        //console.log(result.data)
        res.render('user',{user:result.data});
    }
  })
  .catch(err =>{
      res.send(err);
  });
};

module.exports.post_users = async (req, res) => {

    // build user 
    let user = {
      username : req.body.username,
      password : req.body.password,
      firstname : req.body.firstname,
      lastname : req.body.lastname,
      email : req.body.email,
      usertype : req.body.usertype
    };
    if (req.body.id !== null){
      user.id = req.body.id;
    }
  await axios.post('http://localhost:3000/api/users', user)
  .then((result)=>{
    if (result.status >= 400) {
        console.log(result.status);
        throw new Error("Bad response from server");
    } else{
        //console.log(result.data)
        res.redirect('/users')
    }
  })
  .catch(err =>{
      res.send(err);
  });
};