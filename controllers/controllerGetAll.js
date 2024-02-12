
const {database} = require("../src/db");

const allData = async (req, res) => {
    try {
        const Datos = database.models.datos
        const datos = await Datos.findAll()
        res.json(datos)
        // const nombres =datos.map(dato => dato.name)
        // res.send(nombres)
    } catch (error){
        console.log('Error al traer base de datos:', error);
        res.status(500).send('Error al traer base de datos:');

    }
};


module.exports = allData
