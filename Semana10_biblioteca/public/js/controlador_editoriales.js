'use strict';

mostrar_editoriales();
let botonRegistrar = document.querySelector('#btnRegistrar');
let inputEditorial = document.querySelector('#txtNombreEditorial');
let inputPais = document.querySelector('#txtPais');

botonRegistrar.addEventListener('click' , obtenerDatos);

function obtenerDatos(){
    let sEditorial = inputEditorial.value;
    let sPais = inputPais.value;

    registrar_editorial(sEditorial, sPais);
    mostrar_editoriales();
};

function mostrar_editoriales(){
    let listaEditoriales = listar_editoriales();
    let tbody = document.querySelector('#tblEditoriales tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaEditoriales.length; i++){
        let fila = tbody.insertRow();

        let celdaTitulo = fila.insertCell();
        let celdaEditorial = fila.insertCell();
 

        celdaTitulo.innerHTML = listaEditoriales[i]['nombre'];
        celdaEditorial.innerHTML = listaEditoriales[i]['pais'];
 
    }
};
