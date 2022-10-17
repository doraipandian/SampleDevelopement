module.exports.login_get = (req, res) => {
    let session=req.session;
    if(session.userid){        
        res.render('index');
    }else{
        res.render('login');
    }
};
