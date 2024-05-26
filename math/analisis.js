console.log(salarios);

//analisis personal de Juanita.

//.find
//.filter() - todos los arreglos que tuvieran la conicidencia.


const personaBusqueda = 'Juanita'

const persona = salarios.find((persona)=>{//el primero en encontrar la conicindencia
    return persona.name == personaBusqueda
})