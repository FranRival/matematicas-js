const bton = document.querySelector('#calcular')
const inoutPrice = document.querySelector('#price')
const inputDiscount = document.querySelector('#discount')
const pResult = document.querySelector('#result')
bton.addEventListener('click', sacarPorcentaje)


function sacarPorcentaje(){
    const precio = Number(inoutPrice.value)
    const descuento = Number(inputDiscount.value)



    if (!precio || !descuento) {
        pResult.innerText('Llena el formulario alv')
        return
    }

    if (descuento > 100) {
        pResult.innerText('El descuento no puede ser del 100%')
        return
    }

    const resultado = precio * (100 - descuento)/100
    pResult.innerText = 'El nuevo precio con descuento es: $' + resultado
}

