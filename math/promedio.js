function esPar(lista){
    return !(lista.length%2)
}

function esImpar(lista){
    return lista.length%2
}





function calcularModa(lista){
    const listaCount = {}

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if (listaCount[elemento]) {
            listaCount[elemento] += 1
        }else{
            listaCount[elemento] = 1
        }//funciona un contador
        //js no sabe cual es el numero mayor
       
    }
    console.log(listaCount);
}






function calcularMediana(listaDesordenada){

    const lista = ordenarLista(listaDesordenada)


    const listaEsPar = esPar(lista)

    if (listaEsPar) {
        const indexMitad1ListaPar = (lista.length/2) - 1
        const indexMitad2ListaPar = lista.length/2


        const listaMitades = []
        listaMitades.push(lista[indexMitad1ListaPar])
        listaMitades.push(lista[indexMitad2ListaPar])
       const medianaListaPar = calcularPromedio(listaMitades)
       return medianaListaPar

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
    return promedio

}


function ordenarLista(listaDesordenada){

    function orderListaSort(valorAcumulado,nuevoValor){
        return valorAcumulado - nuevoValor
    }

    const lista = listaDesordenada.sort(orderListaSort)
    return lista
}


//calculando moda a partir de arrays.
//moda, mas elementos repetidos en el array