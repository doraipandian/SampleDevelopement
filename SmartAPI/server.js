const express = require('express');
const apiUserRoutes = require('./routes/apiUserRoutes');
const apiTaskRoutes = require('./routes/apiTaskRoutes');
const config = require('./configuration/config')

const cors = require('cors')
const port = config.app.port || 3000

const app = express();

//register view engine
app.set('view engine', 'ejs');

//listern for request
app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
  });

//access rights
app.use(cors());

//static files like css, img & js
app.use(express.static('public'))
app.use(express.urlencoded({ extended:true }))
app.use(express.json());

app.use((req,res,next) => {
    console.log('New request made');
    console.log('Host:', req.hostname);
    console.log('Path:', req.path);
    console.log('Method:', req.method);
    next();
});

app.use('/api/users',apiUserRoutes);
app.use('/api/tasks',apiTaskRoutes);

//404 page
app.use((req, res) => {
    res.render('404');
})