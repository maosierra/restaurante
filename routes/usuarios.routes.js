const router = require('express').Router();
const validarAdmin = require('../middlewares/validarAdministrador');

router.route('/')
    .get(validarAdmin, (req, res) => {
        console.log(req.user.usuario.esAdministrador); // Si es cero es un usuario normal si es 1 es un administrador
        res.json('Hola desde get de usuarios');
    })
    .put(validarAdmin, (req, res) => {
        res.json('Hola desde PUT de usuarios');
    })
    .delete(validarAdmin, (req, res) => {
        res.json('Hola desde delete de usuarios');
    });

module.exports = router;