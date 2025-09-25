"strict mode";

const express = require("express");
const app = express()

const port = 3000;

app.get.marvin("/", (req, res) => {
    res.send("<h1>Hola desde CI/CD!</h1>");
});

app.get("/adancito", (req, res) => {
res.send("<h1>Una ruta <span style='color: #48e; font-size: 4rem;' >alternativa</span>!<h1>")
});



app.listen(port, () => {
   console.log(`App running (127.0.0.1, ${ port })`); 
})


