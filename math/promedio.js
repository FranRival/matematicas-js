function esPar(lista){
    return !(lista.length%2)
}

function esImpar(lista){
    return lista.length%2
}


function calcularMediana(lista){
    const listaEsPar = esPar(lista)//es true o false

    if (listaEsPar) {
/*         const indexMitad1ListaPar = (lista.length/2) - 1
        const indexMitad2ListaPar = lista.length/2 */

        const Mitad1ListaPar = lista[(lista.length/2) - 1]
        const Mitad2ListaPar = lista[lista.length/2]

        //indexMitad1ListaPar
        //--------| |-------------
        //indexMitad2ListaPar
        //estas 2 variables ubican el objetivo.

        const listaMitades = [Mitad1ListaPar,Mitad2ListaPar]
        calcularPromedio(listaMitades)

    }else{
        const indexMitadListaImpar = Math.floor(lista.length / 2)
        const medianaListaImpar = lista[indexMitadListaImpar]
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar
    
    }
}


function calcularPromedio(lista){


    const sumarTodosElementos = (valorAcumulado,nuevoValor) => valorAcumulado+nuevoValor

    const sumaLista = lista.reduce(sumarTodosElementos)

    const promedio = sumaLista / lista.length
    console.log(promedio);
    return promedio

}


//mediana en lista impar