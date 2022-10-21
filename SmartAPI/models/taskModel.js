//user model
module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define( "task", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        task: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userid: {
            type: DataTypes.SMALLINT
        },
        modifiedby: {
            type: DataTypes.SMALLINT
        }
    } )
    return Task
 }