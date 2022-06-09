//clase producto
class Producto{
    constructor(nombre,precio,cantidad){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = parseInt(cantidad);
    }
    sumarIva(){
        return this.precio * 1.21;
    }
    precioSugerido(){
        return this.precio * 1.21 * 1.25;
    }
}

//funcion mensaje no ingresa monto
function noIngresa(){
    alert("No ingresaste producto");
}

const arrayProductos = [];
let compro = prompt("Ingrese el nombre del producto o 'FIN' para terminar de agregar");
if(compro==="FIN"){
    noIngresa();
}else{
    while(compro!="FIN"){
        let nombreP = compro;
        let precioP = prompt("Ingrese el precio del producto");
        let cantidadP = prompt("Ingrese la cantidad comprada del producto");
        arrayProductos.push(new Producto(nombreP,precioP,cantidadP));
        compro=prompt("Ingrese el nombre del producto o 'FIN' para terminar de agregar");
    }
}

/* for(let i=0;i<arrayProductos.length;i++){
    console.log(arrayProductos[i]);
} */

let producto

//imprimir productos
for (producto of arrayProductos){
    console.log("Nombre del producto: " + producto.nombre);
    console.log("Cantidad: " + producto.cantidad);
    console.log("Precio: $" + producto.precio);
    console.log("Precio con IVA: $" + producto.sumarIva());
    console.log("Precio sugerido: $" + producto.precioSugerido());
}

//poco stock - menos de 2 productos
const pocoStock = arrayProductos.filter(producto => producto.cantidad<=2);
console.log("Lista de productos con stock menor a dos unidades:");
for(producto of pocoStock){
    console.log(" \nNombre: " + producto.nombre + "\nCantidad: " + producto.cantidad);
}

//sin stock
const sinStock = arrayProductos.filter(producto => producto.cantidad==0);
console.log("Lista de productos sin stock:");
for(producto of sinStock){
    console.log("\nNombre: " + producto.nombre + "\nCantidad: " + producto.cantidad);
}

//funcion imprimir
function imprimir(ordenados){
    for(producto of ordenados){
        console.log("\nNombre: " + producto.nombre + "\nPrecio: $" + producto.precio + "\nCantidad: " + producto.cantidad);
        }
}

const ordenados = arrayProductos.map(el => el);

let opcion = parseInt(prompt("Ingrese una opción:\n1. Ordenar por precio ascendente.\n2. Ordenar por precio descendente.\n3. Ordenar de la A-Z.\n4. Ordenar de la Z-A.\n5. Ordenar por cantidad ascendente.\n6. Ordenar por cantidad descendente."));

while(opcion==1||opcion==2||opcion==3||opcion==4||opcion==5||opcion==6){
    switch(opcion){
        case 1:
            console.log("Productos ordenados por Precio Ascendente:");
            ordenados.sort((a,b)=>a.precio-b.precio);
            imprimir(ordenados);
            break;
        case 2:
            console.log("Productos ordenados por Precio Descendente:");
            ordenados.sort((a,b)=>b.precio-a.precio);
            imprimir(ordenados);
            break;
        case 3:
            console.log("Productos ordenados de la A-Z:");
            ordenados.sort((a,b)=>{
                if(a.nombre>b.nombre){
                    return 1;
                }
                if(a.nombre<b.nombre){
                    return -1;
                }
                //a = b
                return 0;
            });
            imprimir(ordenados);
            break;
        case 4:
            console.log("Productos ordenados de la Z-A:");
            ordenados.sort((a,b)=>{
                if(a.nombre<b.nombre){
                    return 1;
                }
                if(a.nombre>b.nombre){
                    return -1;
                }
                //a = b
                return 0;
            });
            imprimir(ordenados);
            break;
        case 5:
            console.log("Productos ordenados por Cantidad Ascendente:");
            ordenados.sort((a,b)=>a.cantidad-b.cantidad);
            imprimir(ordenados);
            break;
        case 6:
            console.log("Productos ordenados por Cantidad Descendente:");
            ordenados.sort((a,b)=>b.cantidad-a.cantidad);
            imprimir(ordenados);
            break;
    }
    opcion = parseInt(prompt("Ingrese una opción:\n1. Ordenar por precio ascendente.\n2. Ordenar por precio descendente.\n3. Ordenar de la A-Z.\n4. Ordenar de la Z-A.\n5. Ordenar por cantidad ascendente.\n6. Ordenar por cantidad descendente."));
}




