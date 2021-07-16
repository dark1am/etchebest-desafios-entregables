class Productos{
    productos = []
    id=0

    add(prod){
        this.productos.push({
            'title':prod.title,
            'price':prod.price,
            'thumbail':prod.thumbnail,
            'id':this.id++
        })
    }
    showList(){
        if(this.productos.length==0){
            return {error:'No hay productos cargados'}
        } else {
            return this.productos
        }   
    }
    showItem(id){
        if(this.productos.find(e=>e.id==id)!=undefined){
            return this.productos.find(e=>e.id==id)
        } else {
            return {error:'Producto no encontrado'}
        }
    }
    updateItem(id,prod){
        if(this.productos.find(e=>e.id==id)!==undefined){
            let temp = this.productos.indexOf(this.productos.find(e=>e.id==id))
            return this.productos[temp] = {
                "title":prod.title,
                'price':prod.price,
                'thumbail':prod.thumbnail,
                "id":id
            }
        } else {
            return {error:'ID no reconocida'}
        }
    }
    deleteItem(id){
        return this.productos = this.productos.filter(e=>e.id!=id)
    }
}

module.exports = new Productos()