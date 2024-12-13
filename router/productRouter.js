const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// responde a la ruta '/product'

// ruta para cargar los productos
router.post("/register", async (req, res) => {

    const { nombre, precio, imagen } = req.body

    console.log(nombre, precio, imagen);

    const producto = {
        nombre,
        precio,
        imagen
    }

    try {

        const newProduct = new Product(producto);

        await newProduct.save();

        return res.status(201).json({ message: 'Producto registrado correctamente' });


    } catch (error) {

        console.log('Error al registrar el producto:', error);
        return res.status(400).json({ message: 'Error al registrar el producto' });
    }

});




module.exports = router;