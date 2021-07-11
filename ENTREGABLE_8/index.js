const express = require('express')
const bodyParser = require('body-parser')
const productosApi = require('./productos-api')
const app = express()
const PORT = 8080

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.listen(PORT,()=>{
    console.log(`Servidor escuchando el puerto ${PORT}`)
})


app.get('/api/productos',(req,res)=>{
    res.send(productosApi.showList())
})

app.get('/api/productos/:id',(req,res)=>{
    res.send(productosApi.showItem(req.params.id))
})

app.post('/api/productos',(req,res)=>{
    res.send(productosApi.add(req.body));
})