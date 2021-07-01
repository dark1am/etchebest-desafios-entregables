const fs = require('fs')

class Archivo{

    productos = []

    constructor(ruta){
        this.ruta=ruta;
    }
    async leer(){
        await fs.promises.readFile(this.ruta,'utf-8')
        .then(res=>console.log(JSON.parse(res)))
        .catch(err=>console.log(this.productos))
    }
    async guardar(titulo,precio,url){
        let obj = {
            id:this.productos.length+1,
            title: titulo,
            price: precio,
            thumbnail:url
        }

        this.productos.push(obj)

        await fs.promises.writeFile(this.ruta,JSON.stringify(this.productos),'utf-8')
        .then(res=>console.log('Guardado exitoso!'))
        .catch(err=>console.log(err))
    }
    async borrar(){
        await fs.promises.unlink(this.ruta)
        .then(res=>console.log('El archivo ha sido borrado con exito!'))
        .catch(err=>console.log(err))
    }
}

const miArchivo = new Archivo('./productos.txt')
