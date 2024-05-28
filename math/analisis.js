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
            empresas[trabajo.empresa][trabajo.year] = [] //si no existe eso, ahora si existe. 
            //si no existe l infrustria mokepon, ya fue creada, 
            //luego, sino existia el ano de X en industrias mokepon, acaba de ser creado
            //
            //sino existia la proepiedad de 2018, ya fue creada
            //y diciendole que sea un array.
            //solo queda insertar la infromacion al array.
        }


        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)

        //recapitulando:
        //recorrimos el array de salarios. linea 85
        //por cada persona en el arreglo de salarios, estamos recorriendo cada uno de los trabajos que tuvo esa persona
        //y dentro de ese trabajo, estamos creando un nuevo objeto de empresas que tengan una proepiedad por cada distint empresa
        //Xcorp. bruce enterprises
        //y por cada distints empresa estamos creando una propiedad con el ano que esa empresa tuvo empleados reciviendo salarios
        //y por cada persona que este en esa empresa, en ese ano
        //estamos insertando el salario
    }
}

