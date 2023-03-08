/*
----------------------------------------------------
2da PreEntrega - Flujo de trabajo - Escobar Nicolas
----------------------------------------------------
*/


//-----------Funciones-----------//
function calc_total(arr) {
    let resultado = 0;
    arr.forEach(product => {
        resultado += product.precio * product.cantidad
    })
    return resultado;
}
//-------------------------------//


carrito_compra = []
//-----------Objetos-----------//
const productList = [{ id: 1, nombre: "RTX 3070 Ti", precio: 250000, cantidad: 0, },
{ id: 2, nombre: "RTX 3080", precio: 300000, cantidad: 0, stock: 10 },
{ id: 3, nombre: "RTX 3080 Ti", precio: 350000, cantidad: 0, stock: 10 },
{ id: 4, nombre: "RTX 3090 Ti", precio: 500000, cantidad: 0, stock: 10 },
]
//----------------------------//


//-----------HoF y Bucle-----------// 
productList.forEach(product => {
    console.log(product.id)
    console.log(product.nombre)
    console.log(product.precio)
    console.log(product.stock)
    console.log("<--------------------->")
})
//-------------------------//

//-----------Bucles y variables-----------//
do {
    let rta_id = prompt("Por favor, ingrese el ID del producto que desea comprar. \n 1) RTX 3070 Ti ($250.000) \n 2) RTX 3080 ($300.000) \n 3) RTX 3080 Ti ($350.000) \n 4) RTX 3090 Ti ($500.000)")
//-----------Condicionales-----------//
    if (!isNaN(rta_id)) {
        //-----------HoF-----------// 
        if (productList.some(product => product.id == rta_id)) {
            //-------------------------//


            let cantidad = prompt("Elija la cantidad que desea adquirir")
            //-----------HoF-----------// 
            const product = productList.find(product => product.id == rta_id)
            //-------------------------//


            product.cantidad = cantidad;

            carrito_compra.push(product)
        }

    } else (alert("Por favor, ingrese un ID correcto."))
//-----------------------------------//


    rta_user = prompt("Seguir comprando? Presione 's' para seguir comprando o 'n' para salir")

} while (rta_user != "n")
//---------------------------//


alert("El total de su compra es de $" +calc_total(carrito_compra))