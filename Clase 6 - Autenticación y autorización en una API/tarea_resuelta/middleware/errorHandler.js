const errorHandler = (error, req, res, next) => {
    //Establezco un código de estado definido por defecto para el error
    const statusCode = error.statusCode || 500;

    //Construyo un objeto de respuesta de error
    const errorResponse = {
        error: {
            message: error.message || 'Error interno del servidor',
            code: error.code || 'internal_error'
        },
    };

    //Envío respuesta de error en formato JSON
    res.status(statusCode).json(errorResponse);
};


module.exports = errorHandler;