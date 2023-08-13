const User = require("../models/userModel");

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
    };

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el Usuario" });
    }
    };

exports.createUser = async (req, res) => {
    try {
        const nuevoUser = await User.create(req.body);
        await nuevoUser.save();
        res.status(201).json(nuevoUser);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el Usuario" });
    }
    };

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        });
    
        if (!user) {
          return res.status(404).json({ error: "User no encontrado" });
        }
    
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ error: "Error al actualizar el User" });
      }
}

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
    
        const userEliminado = await User.findByIdAndRemove(userId);
    
        res.status(200).json(userEliminado);
      } catch (error) {
        res.status(500).json({ error: "Error al eliminar el User" });
      }
};

