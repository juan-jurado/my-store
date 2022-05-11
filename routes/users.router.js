const express = require('express'); //traemos a express

const router = express.Router();

router.get('/', (req, res) => {
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

module.exports = router;


