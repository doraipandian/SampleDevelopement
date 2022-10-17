//user model
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define( "user", {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        usertype: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    } )
    return User
 }