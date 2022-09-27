const express = require('express')

console.log("+-----------------+");
console.log("| meu 1o servidor |");
console.log("+-----------------+");

const app = express()

app.get('/', function (req, res) {
    console.log("alguem fez requisicao GET na rota /");
    res.status(200).send("olá vc mandou um req GET")
})

app.post('/', function (req, res) {
    console.log("alguem fez requisicao POST na rota /");
    res.status(200).send("olá vc mandou um req POST")
})

app.get('/nome', function (req, res) {
    console.log("alguem chamou a rota /nome");
    res.send('<h1 style="background-color: green;">Marcelo</h1>')
})

app.post('/nome', function (req, res) {
    console.log("alguem chamou a rota /nome");
    res.send('<h1 style="background-color: green;">Marcelo</h1>')
})

app.listen(3000, function () {
    console.log("tudo certo! escutando na porta 3000");
})