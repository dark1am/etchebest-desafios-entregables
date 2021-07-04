const express = require('express')
const fs = require('fs')
const app = express()
const RUTA = './productos.txt'
const RUTA_VISITAS ='./visitas.txt'
const PORT = 8080

app.listen(PORT,()=>{
    console.log(`Servidor excuchando el puerto: ${PORT}`)
})

app.get('/items',(req,res)=>{
    try{
        let respuesta = JSON.parse(fs.readFileSync(RUTA,'utf-8'))
        let acum = respuesta.map(e=>e.title)
        let cant = respuesta.length

        const lectura = JSON.parse(fs.readFileSync(RUTA_VISITAS,'utf-8'))
        lectura.visitasItem+=1
        fs.writeFileSync(RUTA_VISITAS,JSON.stringify(lectura))

        res.end(`{items:[${acum}],cantidad:${cant}}`)
    }
    catch {
        console.log('Hubo un error inesperado al solicitar /items')
    }
})

app.get('/item-random',(req,res)=>{
    try{
        let respuesta = JSON.parse(fs.readFileSync(RUTA,'utf-8'))
        let randomNum = parseInt(Math.random()*3)
        let itemRandom = respuesta[randomNum]

        const lectura = JSON.parse(fs.readFileSync(RUTA_VISITAS,'utf-8'))
        lectura.visitasRandom+=1
        fs.writeFileSync(RUTA_VISITAS,JSON.stringify(lectura))

        res.end(`{item:${itemRandom.title}}`)
    }
    catch{
        console.log('Hubo un error inesperado al solicitar /item-random')
    }
})

app.get('/visitas',(req,res)=>{
    try{
        const lectura = JSON.parse(fs.readFileSync(RUTA_VISITAS,'utf-8'))
        res.end(`{visitas:{items:${lectura.visitasItem},item:${lectura.visitasRandom}}}`)
    }
    catch{
        console.log('Hubo un error inesperado al solicitar /visitas')
    }
})