'use strict';

let registrar_interesados = async(tipo_persona, identificacion, sexo, fecha_nacimiento, edad) => {

    await axios({
            method: 'post',
            url: 'https://proyect01-inventario-produc.herokuapp.com/api/registrar-interesados',
            responseType: 'json',
            //data  = body
            data: {
                tipo_persona: tipo_persona,
                identificacion: identificacion,
                sexo: sexo,
                fecha_nacimiento: fecha_nacimiento,
                edad: edad
            }


        }).then(function(res) {
            console.log(res.data);
        })
        .catch(function(err) {
            console.log(err);
        });

};

let listar_interesados = async() => {
    let interesados;

    await axios({
            method: 'get',
            url: 'https://proyect01-inventario-produc.herokuapp.com/api/listar-interesados',
            responseType: 'json'
        }).then(function(res) {
            interesados = res.data.interesados;
        })
        .catch(function(err) {
            console.log(err);
        });

    return interesados;
};