'use strict';

const tabla_planetas = document.querySelector('#tabla-planetas tbody');
const tabla_planetas1 = document.querySelector('#tabla-planetas1 tbody');

let obtener_lista_planetas = () => {
    let lista_planetas = [
        ['Mercurio', 1, 0.06],
        ['Venus', 2, 0.82],
        ['Tierra', 3, 1.00],
        ['Marte', 4, 0.11],
        ['Júpiter', 5, 318],
        ['Saturno', 6, 95.1],
        ['Urano', 7, 14.6],
        ['Neptuno', 8, 17.2],
        ['Plutón', 9, 0.002]
    ];
    return lista_planetas;
};

let rellenar_tabla = () => {
    let planetas = obtener_lista_planetas();
    tabla_planetas.innerHTML = '';
    for (let i = 0; i < planetas.length; i++) {
        let fila = tabla_planetas.insertRow();
        fila.insertCell().innerHTML = planetas[i][0];
        fila.insertCell().innerHTML = planetas[i][1];
        fila.insertCell().innerHTML = planetas[i][2];

    }
};

let rellenar_tabla1 = () => {
    let planetas = obtener_lista_planetas();
    tabla_planetas1.innerHTML = '';
    for (let i = 0; i < planetas.length; i++) {
        let fila = tabla_planetas1.insertRow();
        let celda_planeta = fila.insertCell();
        let celda_posicion = fila.insertCell();
        let celda_masa = fila.insertCell();
      
        let texto_planeta = document.createTextNode(planetas[i][0]);
        let texto_posicion = document.createTextNode(planetas[i][1]);
        let texto_masa = document.createTextNode(planetas[i][2]);
      
        celda_planeta.appendChild(texto_planeta);
        celda_posicion.appendChild(texto_posicion);
        celda_masa.appendChild(texto_masa);

    }
};

rellenar_tabla();
rellenar_tabla1();

