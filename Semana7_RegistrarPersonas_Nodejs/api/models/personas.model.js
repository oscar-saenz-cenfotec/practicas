'use strict';

const mongoose = require('mongoose');

const schema_persona = new mongoose.Schema({
    tipo_persona: { type: String, required: true, unique: false },
    identificacion: { type: String, required: true, unique: true },
    nombre: { type: String, required: true, unique: false },
    sexo: { type: String, required: true, unique: false },
    nacimiento: { type: Date, required: true, unique: false },
    edad: { type: Number, required: true, unique: false },
    estado: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: false},
    telefonos: [
        { 
            numero: { type: String, required: true, unique: false},
            descripcion: { type: String, required: true, unique: false}
        }
    ],
    tarjetas: [
        {
            tipoTarjeta: { type: String, require: true, unique: false },
            numeroTarjeta: { type: String, require: true, unique: true },
            fechaExp: { type: Date, require: true, unique: false },
            codigoCVV: { type: Number, require: true, unique: false }
        }
    ],
    estado: String
});

module.exports = mongoose.model('Persona', schema_persona, 'personas');