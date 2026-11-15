    let descuento = 0
    let arrayProductos=[]
    let prod ={}
    let condicion =""
     let productoEncontrado=""
     let arrayConDescuento =[]
     let busqueda =""
     let confirma = ""
   
    class Producto{
    static id = 0
    constructor(nombre, tamano, color, precio, rubro, img){
        this.id= ++Producto.id,
        this.nombre = nombre,
        this.tamano = tamano,
        this.color = color,
        this.precio = precio,
        this.rubro = rubro,
        this.img = img
    }
    aplicarDescuento = (porcentaje) => {
        this.precio = this.precio - (this.precio * porcentaje);
        console.log("El precio del producto " + this.nombre + " con descuento es: " + this.precio);
    }


}

//     const cargarProducto= () =>{
//         let cargaMarca = prompt("Ingrese el nombre")
//         let cargaTamano = prompt("Ingrese el tamaño - S/M/l -")
//         let cargaColor = prompt("Ingrese el color ")
//         let cargaPrecio = parseInt(prompt("Ingrese el precio"))
//         let cargaRubro = prompt("Ingrese el rubro - Remeras / Pantalones")

//         return new Producto(cargaMarca, cargaTamano, cargaColor, cargaPrecio, cargaRubro)
     
//         }
 
// condicion = "Si"
// while (condicion.toLowerCase() == "si") {

//     let producto = cargarProducto()
//     arrayProductos.push(producto)

//     condicion = prompt("Desea cargar otro producto? Si / No ")
//     console.log("Valor actual:", condicion)
// }

// console.log("** Listado de productos ***")
// for (let producto of arrayProductos) {
//     console.log(producto)
// }

// let carrito = []

// condicion = prompt("Desea procesar los descuentos a los productos ingresados? Si / No ")

// while (condicion.toLowerCase() == "si") {
//     for (let producto of arrayProductos) {
//         if (producto.precio > 10000) {
//             descuento = .1
//             producto.aplicarDescuento(descuento)
//             arrayConDescuento.push(producto)
//         }
//     }
//    condicion = "No"
//    console.log("** Listado de productos con descuento aplicado para la venta: ")
//    for (let producto of arrayConDescuento) {
//      console.log(producto)
    
//    }
// }

// condicion = "Si"

// while (condicion.toLowerCase() == "si") {
//     busqueda = parseInt(prompt("Seleccione el rubro de los productos que desea ver: 1 - Remeras / 2 - Pantalones / 3 - Sumar el precio de todos los productos / 4 - Buscar un producto especifico / 5 - Ver listado de productos / 6 - Buscar un producto / 7 - Sumar precios totales / 8 - Ordenar los productos de menor a mayor precio / 9 - Buscar productos entre un rango de precios / 10 - Salir "))
//     switch (busqueda) {
//         case 1:
        
//             let listaRemeras = arrayProductos.filter(remera => remera.rubro.toLowerCase() === 'remeras');
//             console.log("Cantidad de remeras encontradas:", listaRemeras.length);

//             for (let remera of listaRemeras) {
//                 console.log(remera);
//             }
//             break;
//         case 2:
//             let listaPantalones = arrayProductos.filter(pantalon => pantalon.rubro.toLowerCase() === 'pantalones');
//             console.log("Cantidad de Pantalones encontrados:", listaPantalones.length);

//             for (let pantalon of listaPantalones) {
//                 console.log(pantalon);
//             }
//             break;
//         case 3:
//             const totalPrecio = arrayProductos.reduce((alcancia, prod) => {
//             return alcancia + prod.precio;
//             }, 0);
//             console.log("El total de precios para todos los productos es de: " + totalPrecio)
//             break;
//         case 4:
//             //buscar un producto por nombre
//             let productoBuscado = prompt("Ingrese el nombre del producto ");

            
//             let buscado = arrayProductos.find(producto => producto.nombre.toLowerCase() === productoBuscado.toLowerCase().trim());

//             if (buscado) {
//                 console.log("Detalle del producto seleccionado: \n Nombre: " + buscado.nombre + " \nTalle: " + buscado.tamano + " \nColor: " + buscado.color + " \nPrecio: " + buscado.precio);
//                 } else {
//                 console.log("Producto no encontrado.")
//             }
//             break;

//         case 5: 
//         let ver = prompt("Desea ver el listado de productos ?")
//             if (ver.toLowerCase() == "si") {

//             arrayProductos.forEach((elemento) => console.log("Producto: " + elemento.nombre+ " Valor: "+ elemento.precio))
//             }
            
//         break; 
//         case 6: 
//             productoBuscado = prompt("Ingrese el producto buscado")
//             const buscados = arrayProductos.filter(
//                 (producto) => producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase().trim())
//             )

//             console.log("Detalle de productos buscados")
//             console.log(buscados)
//          break;  
//         case 7: 
//             const totalPrecios = arrayProductos.reduce((total, prod) => total + prod.precio, 0)
//             console.log("El costo total de los productos cargados es de: ")
//             console.log(totalPrecios)
//          break;
//         case 8:
//             confirma = prompt("Desea ver los productos ordenados por precio de menor a mayor?")

//             if (confirma && confirma.toLowerCase() == "si") {
//                 const arrayOrdenado = arrayProductos.toSorted((a,b) => a.precio - b.precio)

//                 console.log("Listado de productos ordenado de menor a mayor precio")
//                 console.log(arrayOrdenado)
//             }
//          break;

//         case 9: 
//         let minimo = parseInt(prompt("Ingrese el minimo precio de los productos que desea listar"))
//             let maximo = parseInt(prompt("Ingrese el maximo precio de los productos que desea listar"))
//             const productosCargados = arrayProductos.filter((producto) =>producto.precio >=minimo && producto.precio <= maximo)
//             console.log("Listado de productos comprendidos en el rango de precios")
//             for(const elemento of productosCargados){
//                     console.log(elemento)
//                 } 
//         case 10: 
//             console.log("Saliendo del programa...")
//             condicion = "No";
//         break;

//         default:
//             console.log("Opción invalida")
//             condicion = "Si"
//         break;
//     }
//     if (busqueda !== 9) {
//     condicion = prompt("Desea realizar otra consulta? Si / No")
//     }
// }

const cargarProductoPrompt = (nombre, tamano, color, precio, rubro, img) => {
    return new Producto(nombre, tamano, color, precio, rubro, img)
}
let btn = document.querySelector('.formulario .btn')
let formulario = document.querySelector('.formulario')
let h3 = document.createElement('h3')
btn.onclick = function() {
     console.log("Hice clic en Enviar");
    let nombre = document.getElementById('nombre').value
    let tamano = document.getElementById('tamano').value
    let color = document.getElementById('color').value
    let precio = document.getElementById('precio').value
    let rubro = document.getElementById('rubro').value
    let img = document.getElementById('img').value

    let producto = cargarProductoPrompt(nombre, tamano, color, precio, rubro, img)
    arrayProductos.push(producto)


h3.innerHTML = "<span>Se ha cargado el producto exitosamente</span>"
formulario.append(h3)
};

let btn_mostrar_productos = document.getElementById("btn_mostrar_productos");
let ul_listado = document.getElementById("listado_productos");

btn_mostrar_productos.onclick = () => {
    ul_listado.innerHTML = "";
    for (let producto of arrayProductos) {
        let li = document.createElement("li");

        li.innerText = "Nombre: " + producto.nombre +
                         " - Tamaño: " + producto.tamano +
                         " - Color: " + producto.color +
                         " - Precio: " + producto.precio +
                         " - Rubro: " + producto.rubro +
                         " - Imagen:" + producto.img;

        ul_listado.appendChild(li);
    }
};

let btn_buscar = document.getElementById("btn_buscar");

btn_buscar.onclick = () => {
    let productoBuscado = document.getElementById("busqueda").value;

    let buscado = arrayProductos.find(producto =>
        producto.nombre.toLowerCase() === productoBuscado.toLowerCase().trim()
    );

    if (buscado) {
        let li = document.createElement("li");

        li.innerText = "Nombre: " + buscado.nombre +
                       " - Tamaño: " + buscado.tamano +
                       " - Color: " + buscado.color +
                       " - Precio: " + buscado.precio +
                       " - Rubro: " + buscado.rubro;

        ul_listado.appendChild(li);

    } else {
        let mensaje = document.createElement("p");
        mensaje.innerText = "Producto no encontrado.";
        mensaje.className = "text-danger m-2";

        document.querySelector(".form-inline").appendChild(mensaje);

        let button_eliminar = document.createElement("button");
        button_eliminar.className = "btn btn-danger";
        button_eliminar.innerText = "X";

        button_eliminar.onclick = () => {
            mensaje.remove();
            button_eliminar.remove();
        };

        document.querySelector(".form-inline").appendChild(button_eliminar);
    }
}
let input_busqueda = document.getElementById("busqueda");

input_busqueda.onkeydown = (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        btn_buscar.onclick();
    }
};

let btn_mostrar_producto_menor_mayor = document.getElementById("btn_mostrar_producto_menor_mayor");
ul_listado = document.getElementById("listado_productos");

btn_mostrar_producto_menor_mayor.onclick = () => {
    ul_listado.innerHTML = "";

    let arrayOrdenado = arrayProductos.toSorted((a, b) => a.precio - b.precio);

    for (let producto of arrayOrdenado) {
        let li = document.createElement('li');

        li.innerText = producto.nombre + " - Precio: " + producto.precio;

        ul_listado.appendChild(li);
    }
}
