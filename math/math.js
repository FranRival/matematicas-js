console.group('Cuadrado')


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

//perimetro = circunferencia
//radio, desde el centro a cuaqluier parte del circulo.

//radio x2 = diametro. entre el borde y el opuesto (partir a la mitad)

//para calcular el diametro
//diametro * pi

//area del circulo = radio al cuadrado * pi

console.group('Circulo')



console.groupEnd('Circulo')