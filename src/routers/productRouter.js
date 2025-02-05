const express = require("express");

const router= express.Router();

const productsControllers = require('../controllers/productsControllers');
router.get('/productos', productsControllers.products);
router.get('/productos/:id', productsControllers.product);



module.exports=router;