function esPar(lista){

    if (lista.length % 2) {
        //si ese reciduo es 1, el numero es impar
        //pero sacamos un 0, no hubo recidio, y es par
        return false
    }else{
        return true
    }


    //los condicionales necesitan que la condicion se cumpla
    //la condicion, validacion, debe devolver true, para que
    //entre a la condicional.



    return !(lista.length%2)// nos saca true cuando estamos en impar y false cuando estamos en par

    //esta funcion declara que es par, tenemos que voltearla.
}


//% significa residuo. 10 no tiene residuos. 11 si
//los numeros pares dara 0. 
//los numeros impares dara 1.



function calcularPromedio(lista){


    const sumarTodosElementos = (valorAcumulado,nuevoValor) => valorAcumulado+nuevoValor

    const sumaLista = lista.reduce(sumarTodosElementos)

    const promedio = sumaLista / lista.length
    console.log(promedio);
    return promedio

}


//mediana en lista impar