

function activarDark (){

        /* SE SELECCONA EL BODY Y SE AGREGA A UNA VARIABLE */
        let bodyDark = document.querySelector("body");
        /* SE LE AGREGA LA PROPIDAD CLASSLIST PARA AGREGAR LA CLASE toggle pone la clase si no la tiene y la quita si la tiene */
        bodyDark.classList.toggle("dark");

}
    /* CREAR ELEMENTOS HTML EN JAVASCRITP */
const boton = document.createElement('button');
/* AGREGAR NOMBRE AL BOTON */
boton.innerText = "Boton Javascript"
/* AGREGAR ELEMENTOS AL HTML */
document.querySelector('.contenedor .item').appendChild(boton);
/* AGREGAR NOMBRE AL INPUT */
const input = document.createElement('input');

function crearTarjeta(){
/* CREAR NUEVA TARJETA DE ELEMENTOS */
/* SE CREA EL DIV */
const div = document.createElement('div');
/* SE AGREGA LA CLASE AL DIV */
div.classList.add('item');
/* SE AGREGA EL DIV DENTRO DEL CONTENEDOR */
document.querySelector('.contenedor').appendChild(div); 

const imagen = document.createElement('img');
imagen.src = "./imagenes/lince.jpg"
document.querySelector('.contenedor .item:last-child').appendChild(imagen);


const titulo = document.createElement('h2');
titulo.innerText ="Lince";
document.querySelector('.contenedor .item:last-child').appendChild(titulo);

/* SE CREA ETIQUETA PARRAFO */
const parrafo = document.createElement('p');
/* SE ADICIONA EL TEXTO DEL PARRAFO */
parrafo.innerText = "Lince es un género de mamíferos carnívoros de la familia Felidae coloquialmente conocidos como linces. Se conocen cuatro especies caracterizadas por su tamaño medio, fuertes patas, largas orejas, cola corta y cuerpo más o menos moteado. Todas las especies habitan exclusivamente en el Hemisferio Norte, en Eurasia y Norteamérica (de donde parecen ser originarios). El llamado lince africano (Caracal caracal), que habita en África y gran parte de Asia Central y Occidental, es en realidad un felino escasamente emparentado que guarda algunas semejanzas externas con los representantes del género Lynx fruto de la convergencia evolutiva, como son su cola, excepcionalmente corta (poco más que un simple muñón), y sus grandes orejas, coronadas por largos penachos de pelo negro en la punta que sirven para incrementar su, ya de por sí, gran audición. También existen unos característicos mechones de pelo largo en las mejillas."
/* SE AGREGA EL PARRAFO DENTRO DEL DIV */
document.querySelector('.contenedor .item:last-child').appendChild(parrafo);
}



