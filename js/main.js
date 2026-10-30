    let descuento = 0
    let arrayProductos=[]
    let prod ={}
    let condicion =""
     let productoEncontrado=""
     let arrayConDescuento =[]
   
    class Producto{
    static id = 0
    constructor(nombre, tamano, color, precio, rubro){
        this.id= ++Producto.id,
        this.nombre = nombre,
        this.tamano = tamano,
        this.color = color,
        this.precio = precio,
        this.rubro = rubro
    }
    aplicarDescuento= ()=>{
        this.precio= this.precio - this.precio * descuento;
        console.log("El precio del producto " + this.nombre + "con descuento es: "+ this.precio);
    }

}

    const cargarProducto= () =>{
        let cargaMarca = prompt("Ingrese el nombre")
        let cargaTamano = prompt("Ingrese el tamaño - S/M/l -")
        let cargaColor = prompt("Ingrese el color ")
        let cargaPrecio = parseInt(prompt("Ingrese el precio"))
        let cargaRubro = prompt("Ingrese el rubro - Remeras / Pantalones")

        return new Producto(cargaMarca, cargaTamano, cargaColor, cargaPrecio, cargaRubro)
     
        }
 
condicion = "Si"
while (condicion.toLowerCase() == "si") {

    let producto = cargarProducto()
    arrayProductos.push(producto)

    condicion = prompt("Desea cargar otro producto? Si / No ")
    console.log("Valor actual:", condicion)
}

console.log("** Listado de productos ***")
for (let producto of arrayProductos) {
    console.log(producto)
}

let carrito = []

condicion = prompt("Desea procesar los descuentos a los productos ingresados? Si / No ")

while (condicion.toLowerCase() == "si") {
    for (let producto of arrayProductos) {
        if (producto.precio > 10000) {
            descuento = .1
            producto.aplicarDescuento()
            arrayConDescuento.push(producto)
        }
    }
   condicion = "No"
   console.log("** Listado de productos con descuento aplicado para la venta: ")
   for (let producto of arrayConDescuento) {
     console.log(producto)
    
   }
}

busqueda = parseInt(prompt("Seleccione el rubro de los productos que desea ver: 1-Remeras / 2-Pantalones "))
switch (busqueda) {
    case 1:
       
        let listaRemeras = arrayProductos.filter(remera => remera.rubro.toLowerCase() === 'remeras');
        console.log("Cantidad de remeras encontradas:", listaRemeras.length);

        for (let remera of listaRemeras) {
            console.log(remera);
        }
        break;
    case 2:
         let listaPantalones = arrayProductos.filter(pantalon => pantalon.rubro.toLowerCase() === 'Pantalones');
        console.log("Cantidad de Pantalones encontrados:", listaPantalones.length);

        for (let pantalon of listaPantalones) {
            console.log(pantalon);
        }
        break;

    default:
        console.log("Opción invalida, las opciones validas son el 1 para remeras o el 2 para pantalones ")
        break;
}