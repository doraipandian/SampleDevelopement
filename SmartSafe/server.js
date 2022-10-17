const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const helper = require('./helper')

const app = express();

//setting up your port
const PORT = process.env.PORT || 8080

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//serving public file
app.use(express.static(__dirname));

//view engine
app.set('view engine', 'ejs');

// cookie parser middleware
app.use(cookieParser());

//server listening 
app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use('/login', authRoutes)
app.use('/', authRoutes)

app.use('/users', helper.sessionValidater, userRoutes)

app.get('/addUser', helper.sessionValidater,(req,res) => {
    res.render('user',{user:[]});
});

app.use('/tasks', helper.sessionValidater, taskRoutes)

app.get('/addTask', helper.sessionValidater,(req,res) => {
    res.render('task',{task:[]});
});

app.get('/logout', (req, res) => {    
    req.session.destroy();
    res.redirect('/');
});

//404 page
app.use((req, res) => {
    res.render('404');
})
