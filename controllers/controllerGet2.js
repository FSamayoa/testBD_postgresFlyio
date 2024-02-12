
const {database} = require("../src/db");

const secundaryPage = async (req, res) => {
    try {
        const valor = req.params.valor;
        const Datos = database.models.datos
        await Datos.findOrCreate({where:{name: valor}})
        res.send(`se guardo este valor: ${valor}`);
    } catch (error){
        console.log('Error al guardar el dato en la base de datos:', error);
        res.status(500).send('Error al guardar el dato en la base de datos');

    }
};


module.exports = secundaryPage
