//Importo express
const express = require('express');

//Importo auth0
const { auth } = require('express-oauth2-jwt-bearer');

//Importo el Middleware Error Handler
const errorHandler = require('./middleware/errorHandler');

//Configuro Middleware con el Servidor de Autorización
const autenticacion = auth({
    audience: 'http://localhost:3000/api/productos',
    issuerBaseURL: 'https://dev-utn-frc-iaew.auth0.com/',
    tokenSigningAlg: "RS256",
});

const app = express();
app.use(express.json());

//Importo el router de libros
const librosRouter = require('./routes/libros');

//Configuramos el middleware de autenticación
app.use('/libros', autenticacion, librosRouter);

app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});