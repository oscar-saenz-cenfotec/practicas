'use strict';

let lista_libros = [];
function registrar_libro(psTitulo, psEditorial, pnPrecio){
    let nuevoLibro = [];
    nuevoLibro.push (psTitulo, psEditorial, pnPrecio)

    lista_libros.push(nuevoLibro);
};
