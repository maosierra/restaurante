const router = require('express').Router();

router.route('/')
    .get((req, res) => {
        res.json('Hola desde get de usuarios');
    })
    .post((req, res) => {
        res.json('Hola desde POST de usuarios');
    })
    .put((req, res) => {
        res.json('Hola desde PUT de usuarios');
    })
    .delete((req, res) => {
        res.json('Hola desde delete de usuarios');
    });

module.exports = router;