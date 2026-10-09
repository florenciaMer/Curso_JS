let anio = parseInt(prompt("Ingrese su año de nacimiento"));
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

const anioActual = 2026;
let edad = anioActual - anio;

alert("Bienvenido/a: " + nombre + ', ' + apellido + ', ' + "actualmente tenés: " + edad + "años.");

