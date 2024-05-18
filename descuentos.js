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


cuponArray.push({ //backedn. nos van a dar la info de this way. 
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




////////////
    function encontrarElemento (cuponElemento){//this modofoko representara cada elemento que este dentro del array. {name, descuento:}

        return cuponElemento.name == cupon
    }

    const cuponEnArray = cuponArray.filter(encontrarElemento)

    /////////////////////traeme al elemento que cumple con la funcion de validacion.
    

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