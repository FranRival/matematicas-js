console.group('Cuadrado')


//desde aqui hay que comenzar a entender this fokin program.

const ladoCUadrado = 5
const perimetroCUadrado = ladoCUadrado*4
const areaCuadrado = ladoCUadrado*ladoCUadrado

function calcularCUadrado(lado){
    return{
        perimetro: lado * 4,
        area: lado*lado
    }
}

console.log({
    ladoCUadrado,
    perimetroCUadrado,
    areaCuadrado
});

console.groupEnd('Cuadrado')
console.group('Triangulo')

const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const ladoTrianguloBase = 4
const alturaTriangulo = 5.5

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+ladoTrianguloBase
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2


function calcularTriangulo(lado1,lado2, base, altura){
    return{
        perimetro: lado1 + lado2 + base,
        area: (base*altura)/2
    }
}

console.groupEnd('Triangulo')

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
});


console.group('Circulo')

const radioCirculo = 3
const diametroCirculo = radioCirculo * 2

const circunferencia = diametroCirculo * Math.PI
const areaCIrculo = (radioCirculo ** 2) * Math.PI

console.log({
    radioCirculo,
    diametroCirculo,
    circunferencia,
    areaCIrculo
});


function calcularCirculo (radio){
    const diametro = radio * 2
    const radioAlCuadrado = Math.pow(radio, 2)


    return {
        circunferencia: diametro *Math.PI,
        area: radioAlCuadrado * Math.PI.toFixed(4)
    }
}

console.groupEnd('Circulo')

//altura de un triangulo.

function calcularAlturaTriangulo(lados,base){

    if (lados == base) {
        console.warn('Este no es un triangulo isoseles');
    }else{
        //h = raizcuadrada(lado**2 - (b**2)/4)
        return Math.sqrt((lados **2) - ((base**2)) / 4)
    }
}

//porcentajes

function sacarPorcentaje(descuento, precio){

    const resultado = precio * (100 - descuento)/100
    return resultado
}


//estoy en el commit: f074a153cf227484b26c999a9bb63495a91c30a2

//tratando de averiguar how it works this fokin program. 

//1. desde la primera hoja de commits, se dejo de modificar la hoja de math.js

//2. desde la primera hoja, a la segunda hoja del final, hay que revisar esos pequenos cambios en el codigo. esos cambios que te los da git en su historial.

//3. esta hoja no ha sobrepasado las 99 lineas de codigo. 

//4. en la linea de codigo donde se hace una nueva hoja, y se cambia es: ec3d1633ee3702a55cc25a677262ce17fed33a01 - construyendo y modificando lo que doit...

//5.con gitk podemos ver las hojas modificadas. y donde comienza a haber nuevos documentos. 


//6. -basuar de merge

//7. and the trully is que ya entiendo this modofko program