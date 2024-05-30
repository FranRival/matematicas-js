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


function medianaEmpresaYear(nombre, year){
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
        return
    } else if(!empresas[nombre][year]){
        console.warn('La empresa no dio salarios ese year');
    }else{
       return ClaseMath.calcularMediana(empresas[nombre][year])
    }


}

function proyeccionEmpresa(nombre){
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
        return
    }else{
        const empresaYears = Object.keys(empresas[nombre])

        const listaMedianaYears = empresaYears.map((year) =>{
            return medianaEmpresaYear(nombre,year)
        }) 

        
            let porcentajeDeCrecimiento = []

            for (let i = 1; i < listaMedianaYears.length; i++) {
                const salarioActual = listaMedianaYears[i]
                const salarioPasado = listaMedianaYears[i-1]
                const crecimiento = salarioActual - salarioPasado
                const porcentajeCrecimiento = crecimiento/salarioPasado

                porcentajeDeCrecimiento.push(porcentajeCrecimiento)
            }
        

            const medianaPorcentajesCrecimiento = ClaseMath.calcularMediana(porcentajeDeCrecimiento)

            console.log({porcentajeDeCrecimiento, medianaPorcentajesCrecimiento});

            const ultimaMedianaSalarios = listaMedianaYears[listaMedianaYears.length-1]
            const aumento = ultimaMedianaSalarios * medianaPorcentajesCrecimiento
            const nuevoMediana = ultimaMedianaSalarios + aumento 
        
            return nuevoMediana
        

    }
}   

//top 10% de salarios

//analisis general. 

function medianaGeneral(){
    const nombres = salarios.map(persona => persona.name)
    console.log(nombres);
}//medianaGeneral() - 20 undefined.  