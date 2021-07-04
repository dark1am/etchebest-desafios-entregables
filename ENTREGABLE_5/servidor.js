// Implementacion en Glitch: https://heather-awake-trail.glitch.me/

const http = require('http')

const server = http.createServer((req,res)=>{
    let obj = {
    id: `${(parseInt(Math.random()*10+1))} `,
    title: `Producto ${(parseInt(Math.random()*10+1))} `,
    price: (Math.random()*1000).toFixed(2),
    thumbnail: `Foto ${parseInt(Math.random()*10+1)}` 
    }
    res.end(JSON.stringify(obj))
})

const PUERTO = process.env.PORT || 3000

server.listen(PUERTO,()=>{
    console.log(`servidor esta escuchando en el puerto http://localhost:${PUERTO}`)
})

