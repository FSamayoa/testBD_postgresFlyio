const { Router } = require("express");
const principalPage = require("../controllers/controllerGet1")
const secondaryPage = require("../controllers/controllerGet2")
const allData = require("../controllers/controllerGetAll")


const oneRoute = Router()

oneRoute.get('/', principalPage )
oneRoute.post('/pagina1/:valor', secondaryPage)
oneRoute.get('/pagina1/:valor', secondaryPage);
oneRoute.get('/datos', allData);

  module.exports = oneRoute