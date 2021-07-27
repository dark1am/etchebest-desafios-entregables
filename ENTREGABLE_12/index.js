const express = require('express')
const bodyParser = require('body-parser')
const productosApi = require('./productos-api')
const handleBars = require('express-handlebars')
const routerApi = express.Router()
const app = express()
const PORT = 8080

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use('/api',routerApi)

app.engine('handlebars',handleBars())
app.set('view engine','handlebars')

const server = app.listen(PORT,()=>{
    console.log(`Servidor escuchando el puerto ${PORT}`)
})

routerApi.get('/productos',(req,res)=>{
    res.send(productosApi.showList())
})

routerApi.get('/productos/:id',(req,res)=>{
    res.send(productosApi.showItem(req.params.id))
})

routerApi.post('/productos',(req,res)=>{
    productosApi.add(req.body)
    res.redirect('/productos/formulario')
    res.send()
})

routerApi.put('/productos/:id',(req,res)=>{
    res.send(productosApi.updateItem(req.params.id,req.body))
})

routerApi.delete('/productos/:id',(req,res)=>{
    res.send(productosApi.deleteItem(req.params.id))
})

app.get('/productos/vista',(req,res)=>{
    res.render('home',{productos:productosApi.showList()})
})

app.get('/productos/formulario',(req,res)=>{
    res.render('productos')
})

app.get('*',(req,res)=>{
    res.send('404: Page not found')
})

const socketIo = require('socket.io')
const io = socketIo(server)

io.on('connection',()=>{
    console.log('new connection');
})
