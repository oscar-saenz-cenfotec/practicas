'use strict';


const tbody = document.querySelector('#tbl-interesados tbody');

let mostrar_datos = async() => {
    let interesados = await listar_interesados();
    tbody.innerHTML = '';

    for (let i = 0; i < interesados.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = interesados[i]['tipo_persona'];
        fila.insertCell().innerHTML = interesados[i]['identificacion'];
        fila.insertCell().innerHTML = interesados[i]['sexo'];
        fila.insertCell().innerHTML = interesados[i]['fecha_nacimiento'];
        fila.insertCell().innerHTML = interesados[i]['edad'];
    }


};

mostrar_datos();