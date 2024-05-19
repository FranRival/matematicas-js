function calcularPromedio(lista){

    function sumarTodosElementos(valorAcumulado,nuevoValor){//no es el indice. es el elemento en el array.

        return valorAcumulado+nuevoValor
    }

    const sumaLista = lista.reduce(sumarTodosElementos)

    const promedio = sumaLista / lista.length
    console.log(promedio);
    return promedio

}


