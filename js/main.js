const precios = [2000,3000,4000,5000,6000];
const productos = ["Teclado","Monitor","Mouse","Placa de sodino","Placa de video"];

let seguir = "";
let seguirProd = "";
let descuento = 10;
let precioFinal = 0;
let totalProductos = 0;
let buscado = "";
let nombre = "";
let precio = 0;
let promedio = 0;
let producto = "";
let sumaPrecios = 0;

const calcularDescuento = (p, d) => {
    p = p - p * d / 100;
    return p;
};

function mostrarMensaje(mensaje, p) {
    alert(mensaje + p);
}

function calcularPromedio(totProd, tot) {
    return tot / totProd;
}

function listarPrecios(arrays) {
    for (const array of arrays) {
        alert("Valor encontrado: " + array);
    }
}


do {
    precio = parseFloat(prompt("Ingrese el precio del producto: "));
    precios.push(precio);
    sumaPrecios = sumaPrecios + precio;

    if (precio > 1000000) {
        descuento = 20;
    } else {
        descuento = 10;
    }

    precioFinal = calcularDescuento(precio, descuento);
    mostrarMensaje("Precio con descuento: $", precioFinal);

    seguir = prompt("¿Desea seguir cargando precios? Si/No");
}  while (seguir.trim().toLowerCase() === "si");

totalProductos = precios.length;

mostrarMensaje("Total de precios ingresados: ", totalProductos);


do {
    producto = prompt("Ingrese el nombre del producto: ");
    productos.push(producto);

    seguirProd = prompt("¿Desea continuar ingresando productos? Si/No");
} while (seguirProd.trim().toLowerCase() === "si");

let preguntaUltimo = prompt(
    "¿Desea mover el último elemento al inicio de la lista? Si/No"
);

if (preguntaUltimo == "Si") {
    let ultimo = productos.pop();
    alert("Se ha movido el ultimo elementos al inicio, el nombre es: " + ultimo)
    productos.unshift(ultimo);
}


let ordenar = prompt("¿Desea ordenar la lista de productos? Si/No");

if (ordenar == "Si") {
    productos.sort();
}

alert("Lista de productos:");
listarPrecios(productos);

buscado = prompt("Ingrese el nombre del producto que desea reemplazar:");
nombre = prompt("Ingrese el nombre del nuevo producto");

let posicion = productos.indexOf(buscado);

if (posicion != -1) {
    productos.splice(posicion, 1, nombre);
} else {
    alert("El producto no se encuentra en la lista.");
}

alert("Lista actualizada de productos:");
listarPrecios(productos);

if (totalProductos > 0) {
    promedio = calcularPromedio(totalProductos, sumaPrecios);
    mostrarMensaje("El precio promedio es: $", promedio);
}

alert("Lista de precios:");
listarPrecios(precios);