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


function analisisEmpresarial(){

}

const empresas = {}


for(persona of salarios){
    for(trabajo of persona.trabajos){
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {}
        }
        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = []
        }


        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    }
}

console.log({empresas});

//salarios empresariales

function medianaEmpresaYear(nombre, year){
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
        return
    } else if(!empresas[nombre][year]){
        console.warn('La empresa no dio salarios ese year');
    }else{
       return ClaseMath.calcularMediana(empresas[nombre][year])
    }


}//medianaEmpresaYear('Industrias Mokepon', 2019)
//busca el nombre de la empresa
//y da la mediana de los salarios

//proyeccion de una empresa

//proyeccion de salarios por empresas

function proyeccionEmpresa(nombre){
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
        return
    }else{
        const empresaYears = Object.keys(empresas[nombre])

        const listaMedianaYears = empresaYears.map(() =>{
            return medianaEmpresaYear(nombre,year)
        }) //creamos un arreglo 
        //ya no con el ano [2018,2019,2020]
        //sino tendra la mediana del sueldo
        //[800, 900,1000]
        console.log(listaMedianaYears);
    }
}