//Productos
class Producto{
    constructor(id,nombre, precio, descripcion, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}
const tijerasRoma=new Producto({
    id: 1,
    nombre: "Tijeras Roma",
    precio: 5000,
    descripcion: "Seguras, prácticas y fáciles de usar. Ideales para niños, trabajos escolares y manualidades.",
    imagen: "img/tijeras-roma.jpg"
});