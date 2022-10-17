
let sessionValidater = (req, res, next) => {   
    console.log(req.session);
    if (req.session.userid) {
        console.log('Found User Session');
       next();
    } else {
        console.log('No User Session Found');
        return res.redirect('/');
    }
};

module.exports = {sessionValidater };