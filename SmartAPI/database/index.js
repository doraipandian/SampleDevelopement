//importing modules
const config = require('../configuration/config')
const {Sequelize, DataTypes} = require('sequelize')

//Database connection with dialect of postgres specifying the database we are using
//port for my database is 5432
//database name is TaskManager
const sequelize = new Sequelize(`postgres://postgres:test123@${config.db.host}:${config.db.port}/${config.db.name}`, {dialect: "postgres"})

//checking if connection is done
sequelize.authenticate().then(() => {
    console.log('Database connected to taskmanager')
}).catch((err) => {
    console.log(err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

//connecting to model
db.users = require('../models/userModel') (sequelize, DataTypes)
db.tasks = require('../models/taskModel') (sequelize, DataTypes)

//exporting the module
module.exports = db;