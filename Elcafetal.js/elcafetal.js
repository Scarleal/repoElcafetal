

let opciondecompra=prompt("Bienvenidos a El cafetal! Desea comprar alguna taza? Ingrese si o no")
if(opciondecompra == "si"){
    alert("Genial! te damos la bienvinda a nuestro catalogo, al final de tu compra encontraras una linda sorpresa")
    console.log("Genial! te damos la bienvinda a nuestro catalogo, al final de tu compra encontraras una linda sorpresa ")
    let cantdetazas = parseInt(prompt("Ingrese cuantas tazas desea adquirir"))
    let total= 0 

for(let i=1; i <= cantdetazas; i++){
    let taza = parseInt(prompt("Ingrese la cantidad de su taza" + i))
    total= total + taza
    console.log(`El total de su compra sin su sorpresa es de: ${total} pesos mexicanos`)
    alert(`El total de su compra sin su sorpresa es de: ${total} pesos mexicanos`)
}
let descuento= total*.20
alert(`Felicidadez tienes un descuento de:${descuento}`)
let totalfinal= total-descuento
alert(`Su total con descuento es de:${totalfinal}`)

    
}else{
    alert("No hay problema! te damos la bienvinda a nuestro catalogo para tus futuras compras")
    console.log("No hay problema! te damos la bienvinda a nuestro catalogo para tus futuras compras")
   
}



