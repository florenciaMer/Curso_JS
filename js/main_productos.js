
// productos


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
}
const cargarProducto = (nombre, tamano, color, precio, rubro, img) => {
    return new Producto(nombre, tamano, color, precio, rubro, img)
}

let arrayProductos =[]
arrayProductos.push(cargarProducto("Remera", "M", "Rojo", 15000, "Remeras", "../img/remera.webp"))
arrayProductos.push(cargarProducto("Musculosa", "M", "Roja", 35000, "Remeras", "../img/musculosa.jpg"))
arrayProductos.push(cargarProducto("Chomba Pique", "M", "Gris", 55000, "Remeras", "../img/pique.jpg"))
arrayProductos.push(cargarProducto("Pantalón", "L", "Azul", 95000, "Pantalones", "../img/pantalon_vestir.jpg"))
arrayProductos.push(cargarProducto("Jean", "L", "Azul", 125000, "Pantalones", "../img/jean.webp"))


 for (let producto of arrayProductos) {
        let card = document.createElement("div");
        card.className = "card m-2";
        card.style.width = "18rem";

        let img = document.createElement("img");
        img.src = producto.img;
        img.className = "card-img-top";
        img.alt = producto.nombre;

        let div = document.createElement("div");
        div.className = "card-body";

        let h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerHTML = producto.nombre+ " - "+ producto.color + " Talle: " + producto.tamano +" $ " + producto.precio 

        let a = document.createElement("a");
        a.href = "#";
        a.className = "btn btn-primary";
        a.innerHTML = "Ver más";

        div.appendChild(h5);
        div.appendChild(a);

        card.appendChild(img);
        card.appendChild(div);

        let container = document.querySelector(".container_productos");
        container.appendChild(card);
    }
// busqueda
let busquedaCategoria = document.getElementById("busquedaCategoria");
let container = document.querySelector(".container_productos");

busquedaCategoria.addEventListener("change", (e) => {

    let categoriaBuscada =busquedaCategoria.value;

    // Busco todos los productos de esa categoría
    let buscados = arrayProductos.filter(producto =>
        producto.rubro.toLowerCase().trim() === categoriaBuscada
    );

    // Limpio los productos anteriores
    container.innerHTML = "";

    if (buscados.length > 0) {

        buscados.forEach(producto => {

            let card = document.createElement("div")
            card.className = "card m-2"
            card.style.width = "18rem"

            let img = document.createElement("img")
            img.src = producto.img
            img.className = "card-img-top"
            img.alt = producto.nombre

            let div = document.createElement("div")
            div.className = "card-body"

            let h5 = document.createElement("h5")
            h5.className = "card-title"
            h5.innerHTML = producto.nombre + " - " + producto.color +
                " Talle: " + producto.tamano + " $ " + producto.precio

            let a = document.createElement("a")
            a.href = "#"
            a.className = "btn btn-primary"
            a.innerHTML = "Ver más"

            div.appendChild(h5)
            div.appendChild(a)

            card.appendChild(img)
            card.appendChild(div)

            container.appendChild(card)
        });

    } else {
        container.innerHTML = "<p class='text-danger m-2'>Categoría no encontrada.</p>";
    }
});

// busqueda por precio

let btnBuscarPrecio = document.getElementById("btnBuscarPrecio")
let desde = document.getElementById("desde")
let hasta = document.getElementById("hasta")
btnBuscarPrecio.onclick = () => {
    
   // Busco todos los productos de esa categoría
    let buscadosPrecio = arrayProductos.filter(producto =>
        producto.precio >=  desde.value && producto.precio <= hasta.value
    )
    if (buscadosPrecio.length>0) {
        container.innerHTML = "";
         buscadosPrecio.forEach(producto => {

            let card = document.createElement("div")
            card.className = "card m-2"
            card.style.width = "18rem"

            let img = document.createElement("img")
            img.src = producto.img
            img.className = "card-img-top"
            img.alt = producto.nombre

            let div = document.createElement("div")
            div.className = "card-body"

            let h5 = document.createElement("h5")
            h5.className = "card-title"
                h5.innerHTML = producto.nombre + " - " + producto.color +
                " Talle: " + producto.tamano + " $ " + producto.precio

            let a = document.createElement("a")
            a.href = "#"
            a.className = "btn btn-primary"
            a.innerHTML = "Ver más"

            div.appendChild(h5)
            div.appendChild(a)

            card.appendChild(img)
            card.appendChild(div)

            container.appendChild(card)
        })

    } else {
        container.innerHTML = "<p class='text-danger m-2'>Rango de precios no encontrado.</p>";
    }
}
