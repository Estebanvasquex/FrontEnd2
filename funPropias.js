let randomSimple = Math.random();
let randomEscalado = Math.random()*(100-1)+1; /* NÚMERO ALEATORIO CON MULTIPLICACIÓN */


console.log(randomSimple);
console.log(randomEscalado);
console.log(parseInt(randomEscalado)); /* REDONDEA EL NÚMERO */

let num1=Math.max(10,20);
let num2 = Math.max (10,20,30.58);
let num3 = Math.max (10,20,30.58,"No");
console.log(num1,num2,num3);

/* let a = parseInt("22");
let b = parseInt(prompt("Ingrese edad"));
let c = parseInt("22"+"150");
let d = parseInt(22+150)
let e = parseInt(22+parseInt("150"));
let f = parseInt(22.55);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f); */