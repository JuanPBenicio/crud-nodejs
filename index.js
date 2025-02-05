require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname ,'src/views'));

mainRouter = require("./src/routers/mainRouter")
app.use(mainRouter);

app.use(require("./src/routers/productRouter"));

app.listen(port, ()=>{
    console.log(`http:localhost:${port}`);
});