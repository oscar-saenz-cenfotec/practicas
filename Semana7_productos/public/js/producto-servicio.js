'use strict';
let listar_productos = async() => {
    let productos;

    await axios({
            method: 'get',
            url: 'https://proyect01-inventario-produc.herokuapp.com/api/listar-productos',
            responseType: 'json'
        }).then(function(res) {
            productos = res.data.productos;
        })
        .catch(function(err) {
            console.log(err);
        });

    return productos;
};