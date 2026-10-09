
let sigue;
const aprobado = 6;
let alumno = "";
let cantidad_notas=0;
let nota = 0;

cantidad_notas = parseInt(prompt("Ingresa la cantidad de notas a registrar, el valor debe ser mayor o igual a 1"));

while (cantidad_notas <1) {
    alert("Debes ingresar un valor mayor o igual a 1");
    cantidad_notas = parseInt(prompt("Ingresa la cantidad de notas a registrar, el valor debe ser mayor o igual a 1"));
}
do{
    for (let i = 0; i < cantidad_notas; i++) {
        alumno = prompt("Ingresa el nombre y apellido del alumno ")
        nota = parseInt(prompt("Ingresa la nota del alumno "+ alumno));
        if (nota >= aprobado) {
            alert("Alumno aprobado");
        }else{
            alert("Alumno desaprobado");
        }      
    }
   sigue = prompt("¿Deseas volver a cargar las notas? Escribe Si para continuar u otra tecla para salir");
}while (sigue =="Si");



