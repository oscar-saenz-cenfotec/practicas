'use strict';
const tbody = document.querySelector('#tbl-productos tbody');

let mostrar_datos = async() => {
    let productos = await listar_productos();
    tbody.innerHTML = '';

    for (let i = 0; i < productos.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = productos[i]['codigo'];
        fila.insertCell().innerHTML = productos[i]['nombre'];
        fila.insertCell().innerHTML = productos[i]['precio'];
        fila.insertCell().innerHTML = productos[i]['descripcion'];
    }
};

mostrar_datos();