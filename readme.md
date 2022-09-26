# Aula 07 - SDM - 26/09

o que foi necessário para criar esse projeto?

1. crir a pasta do projeto

2. abrir o terminal

3. executar
```
npm init
```

4. criamos o arquivo `server.js`

5. instalar o express
```
npm install express
```

6. se quiser usar o nodemon, adicionar no arquivo `package.json`
```
"dev": "nodemon ./server.js"
```
7. para testar fizemos este trecho

```
const app = express()

app.get('/', function (req, res) {
    console.log("alguem chamou a rota /");
    res.send('<h1 style="background-color: red;">Oi gente</h1>')
})

app.get('/nome', function (req, res) {
    console.log("alguem chamou a rota /nome");
    res.send('<h1 style="background-color: green;">Marcelo</h1>')
})

app.listen(3000, function () {
    console.log("tudo certo! escutando na porta 3000");
})
```
