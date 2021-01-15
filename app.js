const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parse application/x-www-form-urlencoded form
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json form
app.use(bodyParser.json());

// variables de entorno
require('dotenv').config();

const port = process.env.PORT || 3000;

// conexion a base de datos
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.oent1.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Base de datos conectada.');
  })
  .catch((e) => console.log(e));

// motor de plantillas
app.set('view engine', 'pug');
app.set('views', __dirname + '/src/views');

app.use(express.static(__dirname + '/public'));

// Routes
app.use('/', require('./src/routes/index.routes'));
app.use('/mascotas', require('./src/routes/mascotas.routes'));

app.use((req, res, next) => {
  res.status(404).render('404', {
    titulo: '404 ERROR',
    body: 'Esto es un error de url no encontrada.',
  });
});

app.listen(port, () => {
  console.log('Servidor a su servicio en el puerto', port);
});
