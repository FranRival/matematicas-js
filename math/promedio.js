function esPar(lista){
    return !(lista.length%2)
}

function esImpar(lista){
    return lista.length%2
}


function calcularMediana(lista){
    const listaEsPar = esPar(lista)//es true o false

    if (listaEsPar) {
        
    }else{
        const medianaImpar = Math.floor(lista.length / 2) + 1
        //SIMPLE LOGICA: este no da el elemento de la mediana.
        //da el indice. 
        //no da el numero o string a la mitad del array.
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