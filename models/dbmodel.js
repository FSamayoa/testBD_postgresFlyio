const {DataTypes} = require("sequelize")

module.exports = (database) => {

    database.define('datos',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        name:{
            type: DataTypes.STRING,

        }
    })

}