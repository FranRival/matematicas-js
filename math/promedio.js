function calcularPromedio(lista){


    const sumarTodosElementos = (valorAcumulado,nuevoValor) => {
        return valorAcumulado+nuevoValor
    }

    const sumaLista = lista.reduce(sumarTodosElementos)

    const promedio = sumaLista / lista.length
    console.log(promedio);
    return promedio

}


