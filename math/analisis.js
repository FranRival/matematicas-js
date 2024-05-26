console.log(salarios);

//analisis personal de Juanita.

//.find
//.filter() - todos los arreglos que tuvieran la conicidencia.


function encontrarPersona(personaBusqueda){
    return salarios.find(persona => persona.name == personaBusqueda)
}