/* “Loteria”
Crear un programa que consista en una apuesta donde el usuario tenga que ingresar un objeto o lugar con el que soñó ese día, para que luego lo muestre en pantalla y se calcula aleatoriamente un resultado numérico con 4 posibles casos de premios que pueda ganar: si el resultado es 0, gana $1000, si es 1, gana $10000; si es 2 gana $10000, y si es 3 gana $100000.

 */

/* let suenio = prompt("CUAL ES TU SUEÑO: "); */

let numAleatorio = Math.round(Math.random()*10);

function resultadoLoteria(numAleatorio){
    console.log(numAleatorio)
    let gana = 0;
    switch (numAleatorio) {
        case 0:
            gana=1000;
        break;
        case 1:
            gana=10000;
        break;
        case 2:
            gana=10000;
        break;
        case 3:
            gana=100000;
        break;
        default:
    }

    return gana;

}

let juego = resultadoLoteria(numAleatorio);

console.log(juego);

