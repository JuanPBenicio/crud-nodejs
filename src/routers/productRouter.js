const express = require("express");

const router= express.Router();

const queryString = require("querystring");

router.get('/productos', (req,res) =>{
    const query = queryString.stringify(req.query);
    console.log(query);

    const limit = req.query.limit;
    fetch('https://fakestoreapi.com/products?' + query)
            .then(res=>res.json())
            .then((productos)=> res.json(productos))
});

router.get('/productos/:id', (req,res) =>{
    fetch('https://fakestoreapi.com/products/' + req.params.id)
            .then(res=>res.json())
            .then((producto)=> res.json(producto))
});



module.exports=router;