const express = require("express");//importar / chamar módulo express

//o express vai criar um servidor para poder mostrar tudo o que agente tá construindo dentro do navegador

//instanciar express
const app = express();

/*
console.log(express, typeof express);
console.log(app, typeof app);
*/


//a ferramenta que vai renderizar o html é o ejs
app.set("view engine", "ejs");


//criar rotas
//se refere ao nome do site
app.get('/', function (req, res) {
    const items = [
        {title: "D", message: "esenvolver aplicações/serviços de forma fácil"},
        {title: "E", message: "JS usa JavaScript para renderizar HTML"},
        {title: "M", message: "uito fácil de aprender e usar"},
        {title: "A", message: "morzinho"},
        {title: "I", message: "stall js - para usar em seu projeto node"},
        {title: "S", message: "intaxe simples"}
    ];

    const sub = "EJS é uma linguagem de modelagem para construir páginas HTML com JS";

    res.render('pages/index', {
        things: items,
        subtitle: sub
    });//renderizar página e também passar objetos pro arquivo ejs
});

//se refere ao contato
app.get("/contact", function (req, res) {
    res.render("pages/contact");
});

//se refere ao sobre
app.get('/about', function (req, res) {
    res.render('pages/about');
});

//rodar servidor
app.listen(8080);
console.log("Servidor funcionando...");
