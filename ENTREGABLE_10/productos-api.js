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
        if(this.productos[id-1]){
            return this.productos[id]
        } else {
            return {error:'Producto no encontrado'}
        }
    }
    updateItem(id,prod){
        if(id<=this.productos.length){
            return this.productos[id] = {
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