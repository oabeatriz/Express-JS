const express = require('express')
const { dirname } = require('path')
const app = express()
porta = 443

/* o método 'app.get' especifica uma função de retorno de chamada que será invocada sempre que exista
uma solicitação HTTP GET com caminho '/' relativo a raiz do site (dentro do servidor web)
a função de retorno chamada requer uma solicitação e um objeto de resposta como argumento
e chama 'send()' na resposta pra retornar a string 'contato' */

app.get("/contato", function(req, res) {
    res.send("Secção de contato")
})

app.get("/sobre", function(req, res) {
    res.send("Secção sobre")
})

app.get("/", function(req, res) {
res.sendFile(__dirname + '/express.html')
})

app.listen(porta, ()=> {console.log("Servidor rodando.")}  )