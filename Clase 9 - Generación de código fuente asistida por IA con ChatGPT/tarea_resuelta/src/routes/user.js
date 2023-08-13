const express = require("express");
const router = express.Router();

const { getUsers, getUserById, createUser, updateUser, deleteUser} = require("../controllers/userController");

// Importamos la libreria para validar scopes
// const { requiredScopes } = require("express-oauth2-jwt-bearer");

// Ruta para obtener todos los usuarios
router.get("/", getUsers);

// Ruta para obtener un usuario por id
router.get("/:id", getUserById);

// Ruta para crear un nuevo usuario
router.post("/", createUser);

// Ruta para actualizar un usuario existente
router.put("/:id", updateUser);

// Ruta para eliminar un usuario
router.delete("/:id", deleteUser);

module.exports = router;