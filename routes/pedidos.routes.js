const router = require('express').Router();

router.route('/')
    .get((req, res) => {
        if (req.user.usuario.esAdministrador) {
            //Devolver todos los pedidos del sistema
        } else {
            //Devolver solo los pedidos del usuario logueado
        }
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

router.route('/:id')
    .get((req, res) => {
        const idPedido = req.params.id;
        //Buscan el pedido en la BD por id
        res.json('El pedido ' + idPedido);
    })
    .put((req, res) => {
        const idPedido = req.params.id;
        const { estadoNuevo } = req.body;
        //Actualiza estado del pedido por id
        res.json('El pedido ' + idPedido + ' se cambio al estado ' + estadoNuevo);
    });

module.exports = router;