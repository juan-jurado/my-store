const express = require('express'); //traemos a express
const routerAPI = require('./routes'); //traemos a express

//creamos una aplicación
const app = express();

//puerto en el que quiero correr
const port = 3001; //Puede estar sobre los 3000

routerAPI(app);

app.listen(port, () =>  {
  console.log('Im alive in the port ' + port);
});

