console.log(salarios);


function encontrarPersona(personaBusqueda){
    return salarios.find(persona => persona.name == personaBusqueda)
}

function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos 

    const salarios = trabajos.map(function (elemento){
        return elemento.salario
    })

    const medianaSalarios = ClaseMath.calcularMediana(salarios)

    console.log(medianaSalarios);
} 


function proyeccionPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos

    let porcentajeDeCrecimiento = []

    for (let i = 1; i < trabajos.length; i++) {

        const salarioActual = trabajos[i].salario
        const salarioPasado = trabajos[i-1].salario
        const crecimiento = salarioActual - salarioPasado

        const porcentajeCrecimiento = crecimiento/salarioPasado

        porcentajeDeCrecimiento.push(porcentajeCrecimiento)
    }
  

    const medianaPorcentajesCrecimiento = ClaseMath.calcularMediana(porcentajeDeCrecimiento)

    console.log({porcentajeDeCrecimiento, medianaPorcentajesCrecimiento});


    const ultimoSalario = trabajos[trabajos.length-1].salario
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento
    const nuevoSalario = ultimoSalario + aumento 

    return nuevoSalario

}


//estructurando informacion.

//analisis empresarial

/* 
{
    Industrias Mokepon: {
        2018: [{GUARDAR PERSONAS QUE TRABAJARON EN ESTE PLACE}] 
        2019: [salarios, salarios, salarios]
        2020:
        2021:
        2022:
    }
    Industrias Mokepon: {

    }Industrias Mokepon:
    {

    }
} 

*/

//pasar un arreglo complejo a un objeto complejo pero mejor organizado

function analisisEmpresarial(){

}

const empresas = {}


for(persona of salarios){
    for(trabajo of persona.trabajos){
        if (!empresas[trabajos.empresas]) {
            empresas[trabajo.empresas] = {}
        }
        if (!empresas[trabajos.empresas][trabajo.year]) {
            
        }
    }
}

//sho sha no understand nothing a la dickeson.