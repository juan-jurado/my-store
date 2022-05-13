const express = require('express'); //traemos a express

// importo el servicio de Products
const ProductsService = require('./../services/products.service')

// Ahora se crea una instancia del servicio de Products. Es una clase
const service = new ProductsService();

const router = express.Router();

router.get('/', async (req, res) => { // /products
  const products = await service.find();
  res.json(products);
});

router.get('/:id', async (req, res) => {
  // Capturo el ID que me envían - Viene en el 'req'
  const { id } = req.params; //usamos la nomenclatura ES6
  const product = await service.findOne(id);
  res.json(product);

});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = await service.update(id, body);
  res.json(product);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
