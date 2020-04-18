'use strict';

const express = require('express');
const router = express.Router();
const usuario_tarjeta = require('../models/usuario_normal.model');

router.post('/agregar/tarjeta', function(req, res) {
    usuario_tarjeta.update({ _id: req.body._id }, {
        $push: {
            'tarjetas': {
                tipoTarjeta: req.body.tipoTarjeta,
                numeroTarjeta: req.body.numeroTarjeta,
                fechaExp: req.body.fechaExp,
                codigoCVV: req.body.codigoCVV
            }
        }

    },
    function(error) {
        if (error) {
            return res.json({
                success: false,
                msj: 'No se pudo agregar la tarjeta',
                err
            })
        } else {
            return res.json({
                success: true,
                msj: 'Se agregó correctamente la tarjeta'
            });
        }
        }
    
    )
});

router.get('/listar/tarjeta', (req, res) => {
    usuario_tarjeta.find((error, lista_tarjetas) => {
        if (error) {
            res.json({
                resultado: false,
                msj: 'No se pudo listar la o las tarjetas',
                error
            });
        } else {
            res.json({
                resultado: true,
                msj: 'Las Tarjetas se listaron adecuadamente',
                lista_tarjetas
            });
        }
    });
});

router.get('/buscar/tarjeta/:tarjeta', function(req, res) {
   let tarjeta = req.params.tarjetas.tipoTarjeta;
    
    usuario_tarjeta.find ({tarjetas: tipoTarjeta},  function(err, usuario_normalDB) {

                if (err) {
                return res.json({
                    success: false,
                    msj: 'No se encontró ninguna tarjeta para ese cliente',
                    err
                })
            } else {
                return res.json ({
                    success: true,
                    cliente: usuario_normalDB
                });
            }
        })
});

router.delete('/eliminar/tarjeta', function (req, res) {
    let body = req.body;

    usuario_tarjeta.deleteOne({
        _id: body._id
    }).then(resultado => {

        if (resultado.deletedCount == 1) {
            res.json({
                resultado: true,
                msg: 'Se eliminó la tarjeta'
            });
        } else {
            res.json({
                resultado: false,
                msj: 'No se pudo eliminar la tarjeta'
            });
        }
    });
});

router.put('/modificar/tarjeta', function (req, res) {
    let body = req.body;

    usuario_tarjeta.updateOne({
        _id: body._id
    }, {
        $set: req.body
    }, function (error, info) {
        if (error) {
            res.json({
                resultado: false,
                msg: 'No se pudo modificar la tarjeta',
                error
            });
        } else {
            res.json({
                resultado: true,
                info: info
            });
        }
    });
});

module.exports = router;