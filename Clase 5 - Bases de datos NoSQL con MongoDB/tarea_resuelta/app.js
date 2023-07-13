//Importo express
const express = require('express');
const app = express();
app.use(express.json());

//Importo el router de libros
const librosRouter = require('./routes/libros');

//Importo el Middleware Error Handler
const errorHandler = require('./middleware/errorHandler');

app.use('/libros', librosRouter);

app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});