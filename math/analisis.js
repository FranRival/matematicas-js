console.log(salarios);

//analisis personal de Juanita.

//.find
//.filter() - todos los arreglos que tuvieran la conicidencia.


function encontrarPersona(personaBusqueda){
    const persona = salarios.find((persona)=>{
        return persona.name == personaBusqueda
    })
    return persona
}//encontrarPersona('Bruce')