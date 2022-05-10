const express = require('express'); //traemos a express
const faker = require('faker');

//creamos una aplicación
const app = express();

//puerto en el que quiero correr
const port = 3001; //Puede estar sobre los 3000

//definir una ruta
app.get('/', (req, res) => {
  res.send('Hola, mi server en express');
});

app.get('/products/filter', (req, res) => {
  res.send('yo soy un filtro');
});

app.get('/api', (req, res) => {
  res.send('This is the API');
});

app.get('/nuevaruta', (req, res) => {
  res.send('This is the new route');
});

app.get('/prod', (req, res) => {
  res.json({
    urlforwarded: 'house.com',
    port: 1234
  });
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  // Capturo el ID que me envían - Viene en el 'req'
  const { id } = req.params; //usamos la nomenclatura ES6
  res.json({
    id: id,
    nombre: 'chocorramo',
    marca: 'ramo',
    precio: 2500
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    category_Id: categoryId,
    product_id: productId,
    nombre: 'chocorramo',
    marca: 'ramo',
    precio: 2500
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  //como son opcionales hagop una validacion
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parámetros');
  }
});



app.listen(port, () =>  {
  console.log('Im alive in the port ' + port);
});
