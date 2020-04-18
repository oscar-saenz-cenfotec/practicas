'use strict';

const mongoose = require('mongoose');

const schema_usuario_normal = new mongoose.Schema({
    tipo_identificacion: { type: String, required: true, unique: false },
    identificacion: { type: String, required: true, unique: true },
    primer_nombre: { type: String, required: true, unique: false },
    segundo_nombre: { type: String, required: false, unique: false },
    primer_apellido: { type: String, required: true, unique: false },
    segundo_apellido: { type: String, required: false, unique: false },
    genero: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: true },
    telefono: { type: Number, required: true, unique: false },
    fotografia: { type: String, required: false, unique: false },
    rol: { type: String, required: false, unique: false },
    codigo_activacion: { type: String, required: false, unique: false },
    contrasena: { type: String, required: false, unique: false },
    tarjetas: [
        {
            tipoTarjeta: {type: String, require: false, unique: false },
            numeroTarjeta: {type: Number, require: false, unique: true },
            fechaExp: { type: Date, require: false, unique: false },
            codigoCVV: { type: Number, require: false, unique: false }
        }
    ],
    estado: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('usuario_normal', schema_usuario_normal, 'usuarios_normales');