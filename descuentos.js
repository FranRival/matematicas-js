const bton = document.querySelector('#calcular')
const inoutPrice = document.querySelector('#price')
bton.addEventListener('click', sacarPorcentaje)


function sacarPorcentaje(descuento){
    const precio = inoutPrice.value

    const resultado = precio * (100 - descuento)/100
    



}

