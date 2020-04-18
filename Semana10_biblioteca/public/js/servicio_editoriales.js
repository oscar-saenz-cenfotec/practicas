'use strict';

let registrar_editorial = function registrar_editorial(psEditorial, psPais) {
    $.ajax({
        url: 'http://localhost:4000/api/registrar_editorial',
        method: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            nombre : psEditorial,
            pais : psPais
        },
        beforeSend: function beforeSend() {
            
        },
        success: function success(response) {
            //listaEditoriales = response;
            //return listaEditoriales;
        },
        error: function error(_error) {
            console.log("Request fail error:" + _error);
        }
    });
};

function listar_editoriales(){
    let listaEditoriales = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_editoriales',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      peticion.done(function(response){
        listaEditoriales = response;
      });
    
      peticion.fail(function(){
       
      });

    return listaEditoriales;
};

