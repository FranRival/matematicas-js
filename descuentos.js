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




function sacarPorcentaje(){
    const precio = Number(inoutPrice.value)
    const cupon = inputCoupon.value

    if (!precio || !cupon) {
        pResult.innerText('Llena el formulario alv')
        return
    }

    let discuento


    cuponArray.filter(function (){
        //se utilizan mucho cuando se necesita que hacer
    })
    
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