const {Router} = require('express')
const router = Router()
const {usuariosGet, usuariosPut,usuariosDelete,usuariosPost} = require('./../controllers/usuarios.js')

router.get('/', usuariosGet)
router.post('/', usuariosPost)
router.put('/:id', usuariosPut)
router.delete('/:id', usuariosDelete)


module.exports = router