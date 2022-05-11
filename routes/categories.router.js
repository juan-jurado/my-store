const express = require('express'); //traemos a express

const router = express.Router();

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    category_Id: categoryId,
    product_id: productId,
    nombre: 'chocorramo',
    marca: 'ramo',
    precio: 2500
  });
});

module.exports = router;
