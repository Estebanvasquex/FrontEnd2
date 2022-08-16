const imagenes = document.querySelectorAll('.tarjeta img');
const urlImagenes = [];

imagenes.forEach((imagen, index)=>{
    const url = prompt(`Ingrese la URL para la imagen número ${index+1}`);
    urlImagenes.push(url);
    imagen.setAttribute('src', url);
    const parent = imagenes[index].parentNode;
    const enlace = document.createElement('a');
    parent.replaceChild(enlace, imagenes[index]);
    enlace.appendChild(imagenes[index]);
});

const enlaces = document.querySelectorAll('.tarjeta a');
console.log(enlaces);
enlaces.forEach((enlace, index)=>{
enlace.setAttribute('href',urlImagenes[index])
});