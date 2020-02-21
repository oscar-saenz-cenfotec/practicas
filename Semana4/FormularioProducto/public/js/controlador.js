'use strict';

let botonAgregar = document.querySelector('#btnAgregar');
let inputProducto = document.querySelector('#txtNombreProducto');
let inputPrecio = document.querySelector('#txtPrecioProducto');
let inputDescripcion = document.querySelector('#txtDecripcionProducto');

botonAgregar.addEventListener('click', obtenerDatos);

function obtenerDatos (){
    let sNombreProducto = inputProducto.value;
    let sPrecio = Number(inputPrecio.value);
    let sDescripcionProducto = inputDescripcion.value;

    console.log ( sNombreProducto, sPrecio, sDescripcionProducto);
}