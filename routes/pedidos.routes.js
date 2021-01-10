const router = require('express').Router();

router.route('/')
    .get((req, res) => {
        res.json('Hola desde get de pedidos');
    })
    .post((req, res) => {
        res.json('Hola desde POST de pedidos');
    })
    .put((req, res) => {
        res.json('Hola desde PUT de pedidos');
    })
    .delete((req, res) => {
        res.json('Hola desde delete de pedidos');
    });

module.exports = router;