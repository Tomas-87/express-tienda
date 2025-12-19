const productsData = require("./data.js");

function template(title, content) {
    return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
        </head>
        <body>
            <header>
                <h1>${title}</h1>
                <a href="/">Home</a>
                <a href="/electronica">Electrónica</a>
                <a href="/hogar">Hogar</a>
                <a href="/ropa">Ropa</a>
                <a href="/productos">Todos los Productos</a>
                <a href="/productos/baratos">Productos Baratos</a>
                <a href="/productos/caros">Productos Caros</a>
            </header>
            <main>
                ${content}
            </main>
        </body>
        </html>
    `;
}

function render(products) {
    return `
    <h1>Número de productos: ${products.length}</h1>
    <ol>
        ${products.map(({ name, price, stock}) => `
        <li><h2><b>Nombre</b>: ${name}</h2>
            <p><b>Precio</b>: ${price}</p>
            <p><b>Stock:</b> ${stock}</p>
        </li>
        `).join("")}
    </ol>
    `;
}

function filterCategory(category) {
    if (category === undefined) return productsData;
    return productsData.filter(f => f.category === category)
}

module.exports = { template, render, filterCategory };