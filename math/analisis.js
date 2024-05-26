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
    console.log(salarios);
}//medianaPorPersona('Daniela'): ya no muestra trabajos, anos, solo muestra numeros.