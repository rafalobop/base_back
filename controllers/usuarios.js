const { response } = require('express')

const usuariosGet = (req,res = response) => {
    const query = req.query
    res.json({
        msg: 'get hello world',
        query
    })
}
const usuariosPost = (req,res = response) => {
    res.json({body : req.body})
}
const usuariosPut = (req,res = response) => {
    const {id} = req.params

    res.json({
        msg: 'put hello world',
        id
    })
}
const usuariosDelete = (req,res = response) => {
    const {id} = req.params

    res.json({
        msg: 'delete hello world',
        delete:true,
        id
    })
}


module.exports = {usuariosGet, usuariosDelete, usuariosPost, usuariosPut}