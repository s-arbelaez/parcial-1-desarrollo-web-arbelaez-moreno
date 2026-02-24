
function card(obj) {

    // ? Contenedor
    const card = document.createElement("article");

    // ? Contenido
    const img = document.createElement("img");
    img.src = obj.imagen;
    img.width = 100;
    img.height = 100;
    const footer = document.createElement("section");
    const title = document.createElement("h4");
    title.textContent = obj.nombre;
    const desc = document.createElement("p");
    desc.textContent = obj.descripcion;
    const price = document.createElement("h3");
    price.textContent = obj.precio;
    const addBtn = document.createElement("button");
    addBtn.innerHTML = '<i class="fa fa-plus-square" aria-hidden="true"></i>';

    // ? Anidamiento de elementos
    card.appendChild(img);
    footer.appendChild(title);
    footer.appendChild(desc);
    footer.appendChild(price);
    footer.appendChild(addBtn);
    card.appendChild(footer);

    // ? Agregarlo al catálogo
    const catalog = document.getElementById('catalogo');
    catalog.appendChild(card);
}

items.forEach(productos => {card(productos)});