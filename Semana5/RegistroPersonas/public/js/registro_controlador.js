'use strict';

const btn_guardar = document.querySelector('#btn-guardar');
const select_tipo_persona = document.querySelector('#slt-tipo-persona')
const input_identificacion = document.querySelector('#txt-identificacion')
const input_nacimiento = document.querySelector('#txt-nacimiento')
const input_edad = document.querySelector('#txt-edad')

let validar = () => {
    let inputs_requeridos = document.querySelectorAll('#frm-registro [required]');
    let error = false;

    for (let i = 0; i < inputs_requeridos.length; i++) {
        if (inputs_requeridos[i].value == '') {
            inputs_requeridos[i].classList.add('input-error');
            error = true;
        }else {
            inputs_requeridos[i].classList.remove('input-error');
        }
    }
    if (new Date(input_nacimiento.value) > new Date() ) {
        input_nacimiento.classList.add('input-error');
        error = true;
    }

    if (Number(input_edad.value) < Number(input_edad.min) || Number(input_edad.value) > Number(input_edad.max)) {
        input_edad.classList.add('input-error');
        error = true;
    }

    return error;
};

let limpiar = () => {
    select_tipo_persona.value = "";
    input_identificacion.value = "";
    input_nacimiento.value = "";
    input_edad.value = "";
};

let obtener_datos =() => {
    let error = validar();
    let tipo_persona;
    let identificacion;
    let fecha_nacimiento;
    let edad;

    
    if (error) {
        Swal.fire({
            'title': 'Sus datos no se pudieron enviar',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning',
            'confirmButtonText': '¡Entendido!'
        });
    }else {
        tipo_persona = select_tipo_persona.value;
        identificacion = input_identificacion.value;
        fecha_nacimiento = new Date (input_nacimiento.value);
        edad = Number(input_edad.value);
        console.log(tipo_persona, identificacion, fecha_nacimiento, edad);


        Swal.fire ({
            'title': 'Proceso realizado con exito',
            'text': 'Sus datos se enviaron adecuadamente',
            'icon': 'success',
            'confirmButtonText': '¡Entendido!'
        }).then(() => {
            limpiar ();
        });
    }
};

btn_guardar.addEventListener('click', obtener_datos);

