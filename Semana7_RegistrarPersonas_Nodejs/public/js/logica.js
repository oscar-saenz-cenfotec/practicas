'use strict';

let obtener_persona_email = async(email) => {
    try {
        const response = await axios({
            method: 'get',
            url: `http://localhost:3000/api/buscar-persona-email/${email}`,
            responseType: 'json'
        });
        return response.data.contacto;
    } catch (error) {
        console.log(error);
    }
};



let obtener_persona_email2 = async(email) => {
    try {
        const response = await axios({
            method: 'get',
            params: { email: email },
            url: `http://localhost:3000/api/buscar-persona-email2`,
            responseType: 'json'
        });
        return response.data.cliente;
    } catch (error) {
        console.log(error);
    }
};


obtener_persona_email('oscar.saenz@gmail.com');

obtener_persona_email2('laopamarlen@gmail.com');