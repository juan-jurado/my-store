const express = require('express'); //traemos a express
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => { // /products
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

router.get('/filter', (req, res) => {
  res.send('yo soy un filtro');
});

router.get('/:id', (req, res) => {
  // Capturo el ID que me envían - Viene en el 'req'
  const { id } = req.params; //usamos la nomenclatura ES6
  res.json({
    id: id,
    nombre: 'chocorramo',
    marca: 'ramo',
    precio: 2500
  });
});

module.exports = router;
