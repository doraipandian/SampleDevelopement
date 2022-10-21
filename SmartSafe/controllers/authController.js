const helper = require('../helper')
module.exports.login_get = (req, res) => {
    //console.log(req.session);
    let sessionUser = helper.sessData(req)
    if(sessionUser.id){ 
        res.render('index',{sessdata:sessionUser});
    }else{
        res.render('login');
    }
};

module.exports.signup_get = (req, res) => {   
    res.render('signup');
};