var nombre_R, apellido_R, t_documento_R, genero_R, documento_R, telefono_R, ciudad_R, direccion_R, correo_R, password_R;

function validarDatos(){
    nombre_R = document.getElementById('nombres').value;
    apellido_R = document.getElementById('apellidos').value;
    t_documento_R = document.getElementById('tp_documento').value;
    documento_R = document.getElementById('documento').value;
    genero_R = document.getElementById('genero').value;
    telefono_R = document.getElementById('telefono').value;
    ciudad_R = document.getElementById('ciudad').value;
    direccion_R = document.getElementById('direccion').value;
    usuario_R = document.getElementById('usuario').value;
    correo_R = document.getElementById('correo').value;
    password_R = document.getElementById('password').value;
    var confirmar = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    
    if (nombre_R === "" && apellido_R === "" && t_documento_R === "tipo de documento" && documento_R === "" && genero_R === "genero" && telefono_R === "" && ciudad_R === "" && direccion_R === "" && usuario_R === "" && correo_R === "" && password_R === ""){
        alert("Todos los campos son obligatorios");
    }
    else if (nombre_R === ""){
        document.getElementById('nombres').focus();
        alert("Ingrese su Nombre");
    }
    else if (nombre_R.length>30){
        document.getElementById('nombres').focus();
        alert("Nombre muy largo");
    }
    else if (apellido_R === ""){
        document.getElementById('apellidos').focus();
        alert("Ingrese su Apellido");
    }
    else if (apellido_R.length>50){
        document.getElementById('apellidos').focus();
        alert("Apellido muy largo");
    }
    else if (t_documento_R === "tipo de documento"){
        document.getElementById('tp_documento').focus();
        alert("Escoge un tipo de documento");
    }
    else if (t_documento_R === "tarjeta de identidad"){
        document.getElementById('tp_documento').focus();
        alert("Debes ser mayor de edad");
    }
    else if (documento_R === ""){
        document.getElementById('documento').focus();
        alert("Escribe tu documento");
    }
    else if (isNaN(documento_R)){
        document.getElementById('documento').focus();
        alert("Documento no valido. \nDigite solo números");
    }
    else if (documento_R.length > 20){
        document.getElementById('documento').focus();
        alert("Número de documento muy largo");
    }
    else if (genero_R === "genero"){
        document.getElementById('genero').focus();
        alert("Seleccione su género");
    }
    else if (telefono_R === ""){
        document.getElementById('telefono').focus();
        alert("Ingrese su teléfono");
    }
    else if (isNaN(telefono_R)){
        document.getElementById('telefono').focus();
        alert("Teléfono no valido. \nDigite solo números");
    }
    else if (telefono_R.length > 20){
        document.getElementById('telefono').focus();
        alert("Número de teléfono muy largo");
    }
    else if (ciudad_R === ""){
        document.getElementById('ciudad').focus();
        alert("Ingrese su Ciudad");
    }
    else if (ciudad_R.length > 20){
        document.getElementById('ciudad').focus();
        alert("Nombre de ciudad muy largo");
    }
    else if (direccion_R === ""){
        document.getElementById('direccion').focus();
        alert("Ingrese su dirección");
    }
    else if (direccion_R.length > 40){
        document.getElementById('direccion').focus();
        alert("Dirección muy larga");
    }
    else if (usuario_R === ""){
        document.getElementById('usuario').focus();
        alert("Ingrese su Usuario");
    }
    else if (usuario_R.length>20){
        document.getElementById('usuario').focus();
        alert("Usuario muy largo");
    }
    else if (correo_R === ""){
        document.getElementById('correo').focus();
        alert("Ingrese su Correo");
    }
    else if (!confirmar.test(correo_R)){
        document.getElementById('correo').focus();
        alert("Correo no valido");
    }
    else if (correo_R.length>50){
        document.getElementById('correo').focus();
        alert("Correo muy largo");
    }
    else if (password_R === ""){
        document.getElementById('password').focus();
        alert("Ingrese su Contraseña");
    }
    else if (password_R.length<8 || password_R.length>20){
        document.getElementById('password').focus();
        alert("La Contraseña debe ser de minimo 8 y maximo 20 caracteres");
    }

}


