const express = require('express');
const app = express();
const port = 3000;
const { template, render, filterCategory } = require('./functions.js');
const productsData = require('./data.js');

//Creado por Raimundo y Tomás
//Categorías a crear: Electrónica, Ropa, hogar, Productos, Productos Baratos, Productos Caros

app.get('/', (req, res) => {
    res.send(template('Tienda Express', 'Bienvenidos a la Tienda Express de Tomás y Rai'));
});

app.get('/electronica', (req, res) => {
    const filter = filterCategory('electrónica');
    const body = render(filter);
    res.send(template('Electrónica', body));
});

app.get('/hogar', (req, res) => {
    const filter = filterCategory('hogar');
    const body = render(filter);
    res.send(template('Hogar', body));
});

app.get('/ropa', (req, res) => {
    const filter = filterCategory('ropa');
    const body = render(filter);
    res.send(template('Ropa', body));
});

app.get('/productos', (req, res) => {
    const filter = filterCategory();
    const body = render(filter);
    res.send(template('Tienda Express', body));
});

app.get('/productos/baratos', (req, res) => {
    const filter = productsData.filter(f => f.price < 100);
    const body = render(filter);
    res.send(template('Tienda Express', body));
});

app.get('/productos/caros', (req, res) => {
    const filter = productsData.filter(p => p.price >= 100);
    const body = render(filter);
    res.send(template('Tienda Express', body));
});
    
app.use('/', (req, res) => {
    res.status(404).send(template('Tienda Express', 'Ruta no encontrada, utiliza los enlaces de navegación para elegir una categoría válida.'));
});

app.listen(port, () => {
    console.log(`Servidor arrancado en el puerto  http://localhost:${port}`);
});