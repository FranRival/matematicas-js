const bton = document.querySelector('#calcular')
const inoutPrice = document.querySelector('#price')
const inputCoupon = document.querySelector('#cupon')
const pResult = document.querySelector('#result')
bton.addEventListener('click', sacarPorcentaje)


function sacarPorcentaje(){
    const precio = Number(inoutPrice.value)
    const cupon = inputCoupon.value

    if (!precio || !discuento) {
        pResult.innerText('Llena el formulario alv')
        return
    }

    let discuento

    if (cupon == 'Batman') {
        discuento = 30
    }else if(cupon =='descuentox2'){

        discuento = 25
    }else{
        pResult.innerText('Cupon no valido')
        return
    }




    const resultado = precio * (100 - descuento)/100
    pResult.innerText = 'El nuevo precio con descuento es: $' + resultado
}

