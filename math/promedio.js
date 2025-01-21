const ClaseMath = {}
//es un array

ClaseMath.esPar = function esPar(lista){
    return !(lista.length%2)
}

ClaseMath.esImpar = function esImpar(lista){
    return lista.length%2
}

//and this, no se como funciona. ese parametro de lista. 


ClaseMath.calcularModa = function calcularModa(lista){
    const listaCount = {} //un array

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if (listaCount[elemento]) {
            listaCount[elemento] += 1
        }else{
            listaCount[elemento] = 1
        }
    }

    const listaArray = Object.entries(listaCount)
    const listaOrdenada = ordenarListaBidimensional(listaArray,1)
    const listaMaxNumber = listaOrdenada[listaOrdenada.length-1]


    console.log('La moda es: ' + listaMaxNumber[0]);
    const moda = listaMaxNumber
    return moda
}



ClaseMath.calcularMediana = function calcularMediana(listaDesordenada){

    const lista = ClaseMath.ordenarLista(listaDesordenada)


    const listaEsPar = ClaseMath.esPar(lista)

    if (listaEsPar) {
        const indexMitad1ListaPar = (lista.length/2) - 1
        const indexMitad2ListaPar = lista.length/2


        const listaMitades = []
        listaMitades.push(lista[indexMitad1ListaPar])
        listaMitades.push(lista[indexMitad2ListaPar])
       const medianaListaPar = ClaseMath.calcularPromedio(listaMitades)
       return medianaListaPar

    }else{
        const indexMitadListaImpar = Math.floor(lista.length / 2)
        const medianaListaImpar = lista[indexMitadListaImpar]
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar
    
    }
}


ClaseMath.calcularPromedio= function calcularPromedio(lista){
    const sumarTodosElementos = (valorAcumulado,nuevoValor) => valorAcumulado+nuevoValor

    const sumaLista = lista.reduce(sumarTodosElementos)

    const promedio = sumaLista / lista.length
    return promedio

}

ClaseMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
      return valorAcumulado - nuevoValor;
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    
    return lista;
  }


ClaseMath.ordenarListaBidimensional= function ordenarListaBidimensional(listaDesordenada,i){

    ClaseMath.orderListaSort= function orderListaSort(valorAcumulado,nuevoValor){
        return valorAcumulado[i] - nuevoValor[i]
    }

    const lista = listaDesordenada.sort(orderListaSort)
    return lista
}

//analisis salarial con js


//esPar 
//esImpar
//calcularModa
//calcularMediana
//calcularPromedio
//ordenarLista
//ordenarListaBidimensional
//estas son las funciones. ahora, como las hago funcionar