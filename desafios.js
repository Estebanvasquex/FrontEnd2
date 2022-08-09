let edad = parseInt(prompt("Ingrese su edad"));
if(edad>18){
console.log("Es mayor de edad");
}else{
console.log("Es menor de edad");
}



/* USO DEL FOR IN PARA RECORRER OBJETOS*/
let persona =
{
    nombre: "esteban",
    apellidos: "vásquez",
    edad:37
}

for (let iterador in persona) 
{

    console.log(persona[iterador]);
        
}

/* USO DEL FOR OF PARA RECORRER UN ARRAY O STRING, REALIZAR OPERACIONES EN CADA ITERACIÓN SOBRE SU POSICIÓN*/


let series=["Doctor House", "Los simpson", "The walking Dead"]

for(let unaSerie of series){
    console.log(unaSerie)
}