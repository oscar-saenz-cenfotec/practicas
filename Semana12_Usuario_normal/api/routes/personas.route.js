'use strict';
const express = require('express');
const router = express.Router();
const Persona = require('../models/personas.model');

router.post('/registrar-persona', (req, res) => {
    let body = req.body;
    let nueva_persona = new Persona({
        tipo_persona: body.tipo_persona,
        identificacion: body.identificacion,
        nombre: body.nombre,
        sexo: body.sexo,
        nacimiento: body.fecha_nacimiento,
        edad: body.edad,
        email: body.email,
        estado: 'activo'
    });

    nueva_persona.save((err, personaDB) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'No se pudo registrar la persona, ocurrió el siguiente error:',
                err
            });
        } else {
            res.json({
                resultado: true,
                msj: 'Los datos se enviaron de forma exitosa',
                personaDB
            });
        }
    });


});

router.get('/listar-personas', (req, res) => {
    Persona.find((err, lista_personas) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'No se pudieron listar las personas',
                err
            });
        } else {
            res.json({
                resultado: true,
                msj: 'Las personas se listaron adecuadamente',
                lista_personas
            });
        }
    });
});

router.post('/agregar-telefono', function(req, res) {
    Persona.update({ _id: req.body._id }, {
        $push: {
            'telefonos': {
                numero: req.body.numero,
                descripcion: req.body.descripcion
            }
        }

    },
    function(error) {
        if (error) {
            return res.json({
                success: false,
                msj: 'No se pudo agregar el teléfono',
                err
            })
        } else {
            return res.json({
                success: true,
                msj: 'Se agregó correctamente el teléfono'
            });
        }
        }
    
    )
});

router.get('/buscar-persona-email/:email', function(req, res) {
    let email = req.params.email;
    Persona.find ({ email: email }, function(err, personaDB) {
        if (err) {
            return res.json({
                success: false,
                msj: 'No se encontró ningún cliente con ese correo',
                err
            })
        } else {
            return res.json ({
                success: true,
                cliente: personaDB
            });
        }
    })
});

 router.get('/buscar-persona-email2', function(req, res) {
     let email = req.query.email;
     Persona.find({ email: email}, function(err, personaDB) {
         if (err) {
             return res.json({
                 success: false,
                 msj: 'No se encontró ningín cliente con ese correo',
                 err
             });
         } else {
             return res.json ({
                 success: true,
                 cliente: personaDB
             });
         }
     })
 });

module.exports = router;