let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

// contar el numero de casillas
var cuentax = when.length;
var cuentay = who.length;
var cuentaz = what.length;


//generar un numero aleatorio
var x = Math.floor(Math.random()*cuentax);
var y = Math.floor(Math.random()*cuentay);
var z = Math.floor(Math.random()*cuentaz);

//comprueba valores
console.log(x)
console.log(y)
console.log(z)

//Traer tu ID del HTML
var excuse = document.getElementById('excuse');


//Enviar el valor al ID en el HTML
excuse.innerHTML = `${when[x]} ${who[y]} ${what[z]}`;
