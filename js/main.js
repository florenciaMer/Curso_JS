
const precios = [1500,2500,3500,4500,5500];

let descuento =10;
let confirma = "";
let precioFinal =0;
let totalProductos = precios.length;
let total = 0;

let sumaPrecios = 0;

for (let i = 0; i < precios.length; i++) {
    sumaPrecios = sumaPrecios + precios[i];
}

let precio = 0;
let promedio = 0;
const calcularDescuento = (p, d) => {
       p = p - p * d / 100;
    return p;
};
const sumarPrecio = (p) => {
       total = total + p;
    return total;
};

function mostrarMensaje(mensaje, p){
    alert(mensaje + p);
}

function sumarProductos(){
    totalProductos = totalProductos + 1;
    return totalProductos;
}

function calcularPromedio(totProd, tot){
    return tot/totProd;
}

do {
    precio = parseInt(prompt("Ingresa el precio: "));
    precios.push(precio);
    sumaPrecios = sumaPrecios + precio;

    if (precio > 1000000) 
        {
            descuento = 20;
        }else {
            descuento = 10;
    }
    precioFinal = calcularDescuento(precio, descuento);
    mostrarMensaje("El precio con descuento del producto es: " ,precioFinal);
    totalProductos = sumarProductos();
    mostrarMensaje("Total de productos ingresados: " , totalProductos);
    confirma = prompt("Deseas seguir cargando precios? Si/No")
} while (confirma == "Si");

let posicion = 0;
if (precios.includes(2000)) {
    console.log("El precio de $2000 existe en la lista");
    console.log("Está en la posición: " + precios.indexOf(2000));
} else {
    console.log("El precio de $2000 no existe en la lista");
}

if (precios.length > 1) {
    precios.splice(1, 1, 5000);
}

function listarPrecios() {
    for (const precio of precios) {
        console.log("Precio: " + precio);
    }
}
let ultimo = precios.pop();
console.log("El ultimo precio ingresado: " + ultimo);
precios.unshift(ultimo);

promedio = calcularPromedio(totalProductos, sumaPrecios);
mostrarMensaje("El precio promedio de los productos es: ", promedio);

listarPrecios();