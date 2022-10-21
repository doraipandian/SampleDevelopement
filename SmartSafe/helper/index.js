
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

let dateTime = (date)=>{
    const d_t = (date) ? date : new Date();
    
    let year = d_t.getFullYear();
    let month = ("0" + (d_t.getMonth() + 1)).slice(-2);
    let day = ("0" + d_t.getDate()).slice(-2);
    let hour = d_t.getHours();
    let minute = d_t.getMinutes();
    let seconds = d_t.getSeconds();

    // prints date & time in DD/MM/YYYY HH:MM:SS format
    return (day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + seconds);
};

module.exports = {sessionValidater, sessData, dateTime };