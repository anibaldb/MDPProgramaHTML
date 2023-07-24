
/**INGRESADO TES VALORE SPOR EL URUARIOS SABER CUAL ES MAYOR DE LOS TRES Y EL MENOR DE LOS TRES
 * 
 * REALIZAR TABLA DE MULTIPLICAR DADO UN VALOR POR EL URUARIO
 * 
 * REALIZAR LA TAB;A DE DIVIDIR DADO EL VALOR POR EL USURAIO
 * **/
/**
 * 8/8 1
 * 16/8 2
 * 24/8 3
 * TATATA
 */

const prompt = require('prompt-sync')({ sigint: true })

/**let uno = prompt('Ingrese un valor 1: ');
let dos = prompt('Ingrese un valor 2: ');
let tres = prompt('Ingrese un valor 3: ');

uno=parseInt(uno)
dos=parseInt(dos)
tres=parseInt(tres)

if (Number.isInteger(uno) && Number.isInteger(dos) && Number.isInteger(tres)){

    if(uno>dos && uno>tres){
        console.log('El valor 1 es el mayor')
    }
        else if (dos>uno && dos>tres){
        console.log('El valor 2 es el mayor')    
        }
            else{
            console.log('El valor 3 es el mayor')
            }

    if(uno<dos && uno<tres){
        console.log('El valor 1 es el menor')
    }
        else if (dos<uno && dos<tres){
            console.log('El valor 2 es el menor')    
        }
            else{
                console.log('El valor 3 es el menor')
            }
}
**/
let numero = prompt('Ingrese un valor entre del 1 al 10: ');

numero=parseInt(numero)

if (Number.isInteger(numero) && numero>=1 && numero<=10){
    for(mu=1;mu<=10;mu++){
        let resultado=numero*mu
        let dividendo=resultado/mu
        console.log(resultado+"/"+dividendo+"="+mu)
    }
}
    else{
        console.log("Dato ingresado incorrecto... ingrese un nuemero del 1 al 10")
    }

    let nro = prompt('Ingrese un valor entre del 1 al 10: ');

    nro=parseInt(nro)
    
    if (Number.isInteger(nro) && nro>=1 && nro<=10){
        for(mu=1;mu<=10;mu++){
            let resultado=nro*mu
            console.log(nro+'x'+mu+'='+resultado)
        }
    }
        else{
            console.log("Dato ingresado incorrecto... ingrese un nuemero del 1 al 10")
        }