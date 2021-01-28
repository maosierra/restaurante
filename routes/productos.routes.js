const router = require('express').Router();
const validarAdministrador = require('../middlewares/validarAdministrador');

router.route('/')
    .get((req, res) => {
        res.json('Hola desde get de productos');
    })
    .post(validarAdministrador, (req, res) => {
        res.json('Hola desde POST de productos');
    })
    .put(validarAdministrador, (req, res) => {
        res.json('Hola desde PUT de productos');
    })
    .delete(validarAdministrador, (req, res) => {
        res.json('Hola desde delete de productos');
    });

module.exports = router;