require('dotenv').config();
const {Sequelize} = require("sequelize")
const dbmodel = require("../models/dbmodel")

const {DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME} = process.env;


const database = new Sequelize(
    `postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
   
    { logging: false }
)

dbmodel(database)
database.sync({ force: false })

.then(() => {
    console.log('Base de datos sincronizada correctamente');
})
.catch(error => {
    console.error('Error al sincronizar la base de datos:', error);
});
// const {base} = database.models

module.exports = {
    // ...database.models,
    database,
};
