async function operacion(num1: number, num2: number, caso: string) {
    switch (caso) {
        case 'suma':
            const moduloImportado = await import('./suma')
            let temp = new moduloImportado.Suma(num1, num2);
            console.log(temp.resultado())
            break;
        case 'resta': 
            const moduloImportado2 = await import('./resta')
            let temp2 = new moduloImportado2.Resta(num1, num2)
            console.log(temp2.resultado())
            break;
        default: 
            console.log('Dato invalido')
    }
}
const operaciones = () => {
    operacion(5, 5, 'suma')
    operacion(4, 4, 'resta')
}

operaciones()


