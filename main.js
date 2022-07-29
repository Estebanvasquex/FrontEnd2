console.log("HOLA ESTE ES UN MENSAJE DESDE CONSOLA");

console.log(alert("ESTO ES UNA ALERTA"));

console.log(confirm("DEBES ELEGIR SI O NO"));

let confirmacion = confirm("SEGUNDA CONFIRMACIÓN"); /* consultar porque sale en el navegador sin hacer el llamado de la variable */

let edadIngresada = prompt("INGRESE LA EDAD: ");

/* AQUÍ SE COMBINAN AMBOS MÉTODOS PARA ALGO MÁS FUNCIONAL */

let tratoPersonalizado = confirm("¿Desea un trato personalizado?")

if(tratoPersonalizado){
    let nombre = prompt("Por favor, introduzca su nombre");
    alert("Le damos la bienvenida a nuestro sitio "+ nombre +". ¡Muchas     gracias por visitarnos, estamos a su disposición!");
} else {
    alert("Gracias por conectarse.")
}

