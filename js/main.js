

let descuento =10;
let confirma = "";
let precioFinal =0;
let totalProductos = 0;
let total = 0;
let sumaPrecios =0;
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
    sumaPrecios = sumarPrecio(precio);

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

promedio = calcularPromedio(totalProductos, sumaPrecios);
mostrarMensaje("El precio promedio de los productos es: ", promedio);
