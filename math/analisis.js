console.log(salarios);

//analisis personal de Juanita.

//.find
//.filter() - todos los arreglos que tuvieran la conicidencia.


function encontrarPersona(personaBusqueda){
    return salarios.find(persona => persona.name == personaBusqueda)
}

function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos //es un array

    const salarios = trabajos.map(function (elemento){
        return elemento.salario
    })

    const medianaSalarios = ClaseMath.calcularMediana(salarios)

    console.log(medianaSalarios);
} 


function proyeccionPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos

    let porcentajeDeCrecimiento = []//hay que crear una lista donde tenga los diferentes incrementos de salarios a lo largo de su carrera profesional.

    for (let i = 1; i < trabajos.length; i++) {

        const salarioActual = trabajos[i].salario
        const salarioPasado = trabajos[i-1].salario
        const crecimiento = salarioActual - salarioPasado
        //transformar crecimiento en porcentaje

        const porcentajeCrecimiento = crecimiento/salarioPasado

        //in this part donde dice .push, creo que ya le entiendo a js a lverga

        porcentajeDeCrecimiento.push(porcentajeCrecimiento)
    }
    console.log(porcentajeDeCrecimiento);
}//proyeccionPorPersona('Juanita')
//(6) [0, 2.4, 0.23529411764705882, 0.19047619047619047, 0, 0] - da un arreglo de representacion de crecimeinto.