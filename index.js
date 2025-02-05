require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

mainRouter = require("./src/routers/mainRouter")
app.use(mainRouter);

app.use(require("./src/routers/productRouter"));

app.listen(port, ()=>{
    console.log(`http:localhost:${port}`);
});