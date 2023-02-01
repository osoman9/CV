document.getElementById('enviar').addEventListener('click',function(){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let empresa = document.getElementById('empresa').value;
    let comentario = document.getElementById('comentario').value;

    document.getElementById('formulario-contacto').style.display = 'none';
    document.getElementById('mostrar').style.display = 'block';

})