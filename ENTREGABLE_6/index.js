const fs = require('fs')

class Archivo{

    productos = []

    constructor(ruta){
        this.ruta=ruta;
    }
    async leer(){
        try{
            const lectura = await fs.promises.readFile(this.ruta,'utf-8')
            console.log(JSON.parse(lectura))
        }
        catch(error){
            console.log(error)
        }
    }
    async guardar(titulo,precio,url){
        let obj = {
            id:this.productos.length+1,
            title: titulo,
            price: precio,
            thumbnail:url
        }

        this.productos.push(obj)

        try{ 
            await fs.promises.writeFile(this.ruta,JSON.stringify(this.productos),'utf-8')
            console.log('Guardado exitoso!')
        }
        catch(error){
            console.log(error)
        }
    }
    async borrar(){
        try{
            await fs.promises.unlink(this.ruta)
            console.log('El archivo ha sido borrado con exito!')
        }
        catch(error){
            console.log(error)
        }
    }
}

const miArchivo = new Archivo('./productos.txt')

