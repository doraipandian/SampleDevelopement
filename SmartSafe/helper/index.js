
let sessionValidater = (req, res, next) => {   
    console.log(req.session);
    if (req.session.userid) {
        res.locals.user = req.session.user;
        console.log('Found User Session');
       next();
    } else {
        console.log('No User Session Found');
        return res.redirect('/');
    }
};

let sessData = (req) => {
    let sessionUser = { 
        id: req.session.userid,
        name: req.session.username,
        type: req.session.usertype
    }
    return sessionUser;
}
module.exports = {sessionValidater, sessData };