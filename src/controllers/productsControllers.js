const queryString = require("querystring");
const products = (req,res) =>{
    const query = queryString.stringify(req.query);
    console.log(query);

    const limit = req.query.limit;
    fetch('https://fakestoreapi.com/products?' + query)
            .then(res=>res.json())
            .then((productos)=> {
                res.render('productos', {productos});
            })
}

const product = (req,res) =>{
    fetch('https://fakestoreapi.com/products/' + req.params.id)
            .then(res=>res.json())
            .then((producto)=> res.json(producto))
};

module.exports = {
    products,
    product
};