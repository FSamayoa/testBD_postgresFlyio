const db = require("../server/src/db")
const server = require("./src/server");

const port = process.env.PORT || 3000 


db.database.sync().then(() => {
server.listen(port, () => {
    console.log("server on port ", port)
})
})
