const express = require('express');
const cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'
        //middlewares
        this.middlewares()

        //rutas de app
        this.routes()
    }
    middlewares(){
        //cors
        this.app.use(cors())

        //parseo y lectura de body
        this.app.use(express.json())

        //directorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usuariosPath, require('./../routes/usuarios.js'))
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('app corriendo en puerto', this.port)
        })
    }


}
module.exports = Server;