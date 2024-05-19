function calcularPromedio(lista){
    //sumar todos los elementos de l array y luego dividir con la cantidad de elementos.

    //recorrer los elementos del array para sumarlos.

    let sumaLista = 0

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i]

        //[1,2,3,4,5]
    }

    const promedio = sumaLista / lista.length
    console.log(promedio);
    return promedio

}

//para hacer funcionar this shit necesitas en la consola:

//enviar una lista en formato array, con corchetes cuadrados.