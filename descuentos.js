const bton = document.querySelector('#calcular')
const inoutPrice = document.querySelector('#price')
const inputCoupon = document.querySelector('#cupon')
const pResult = document.querySelector('#result')
bton.addEventListener('click', sacarPorcentaje)



/* const cuponesObj = {
    'Batman': 30,
    'AKA': 25,
    '123': 15
} */


const cuponArray = []


cuponArray.push({//tenemos un array. cada elemtno del array no es el nombre del cupon. es un objeto que tiene propieades. 
    name: 'Batman',
    descuento: 30,
    limit: 500
})

cuponArray.push({
    name: 'cuponx2',
    descuento: 25,
    limit: 500
})

cuponArray.push({
    name: 'cuponx3',
    descuento: 15,
    limit: 500
})

cuponArray.push({
    name: 'cuponx4',
    descuento: 10,
    limit: 500
})



function sacarPorcentaje(){
    const precio = Number(inoutPrice.value)
    const cupon = inputCoupon.value

    if (!precio || !cupon) {
        pResult.innerText('Llena el formulario alv')
        return
    }

    let discuento




////////////creando una nueva variable temporl. (2)
    function encontrarElemento (cuponElemento){
        return cuponElemento.name == cupon
    }
//para no hacer un ciclo for o un ciclo manual para hacer la validacion, se utiliza find. (3)
    const cuponEnArray = cuponArray.find(encontrarElemento)

    /////////////////////pregunta a todos los arrays, a los elementos es igual alo que escribieron los usuaroios en el html. (1)

    //enviando una funcion como argumento de otra funcion.
    //esa funcion .find devuelve un objeto que coincide con la validacion,, y devuelve un null o undefind.(4)

    //si existe y desvuelve un obejto, asignamos su propiedad discount. (5)
    

    if (cuponEnArray) {
        discuento = cuponEnArray.descuento
    }else{
        pResult.innerText('Cupon no valido')
    }

    console.log({
        cupon,
        discuento,
        cuponEnArray,
        cuponArray
    });
/* 
    if (cuponesObj[cupon]) {
        discuento = cuponesObj[cupon]
    }else{
        pResult.innerText('Cupon no valido')
    } */

    






    const resultado = precio * (100 - discuento)/100
    pResult.innerText = 'El nuevo precio con descuento es: $' + resultado
}

//metodo find - filter 