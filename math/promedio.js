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

    const listaArray = Object.entries(listaCount)
    console.log({
        listaCount,
        listaArray
    });
}


//como ordenar una lista de listas?



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



function ordenarListaBidimensional(listaDesordenada,i){

    function orderListaSort(valorAcumulado,nuevoValor){
        return valorAcumulado[i] - nuevoValor[i]
    }

    const lista = listaDesordenada.sort(orderListaSort)
    return lista
}//yo ya no undestand nothing. 
//ahora me da un array bidimensional organizado.

//const listaBi2 = [['a',100], ['b',20], ['c',10]]
//y luego 
//ordenarListaBidimensional(listaBi2)
//this modofoco esta ordenada de menor a mayor

//para ubicar bien this modofoko shet. 
//esa i ahi arriba, es para indicar el indice de la pocision del focking array a la dickensn.


/* function ordenarLista(listaDesordenada){

    function orderListaSort(valorAcumulado,nuevoValor){
        return valorAcumulado - nuevoValor
    }

    const lista = listaDesordenada.sort(orderListaSort)
    return lista
} */

//calculando moda: arrays a partir de objetos.

//array bidimensional. listas dentro de otras listas.