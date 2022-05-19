//CLASE 7 - Lunes 9 de mayo de 2022
//Estructura de Datos - Arreglos

// Ejercicio 2: Invertir Arreglo
/*
• Almacene en un arreglo de tamaño N los números ingresados por el usuario.
• La dimensión N también es ingresada por el usuario.
• Muestre los números del arreglo pero del último al primero.
Ejemplo:
v = 1, 3, 7, 9, 9, 5
La salida es: 5, 9, 9, 7, 3, 1
*/

let cantidad: number = Number(prompt("Ingrese la cantidad de números:"));
let v: number[] = new Array(cantidad);
let indice: number;

for (indice = 0; indice < cantidad; indice++) {
  v[indice] = Number(prompt(`Ingrese v[ ${indice} ]: `));
}

let cadena: string = "";
for (indice = cantidad - 1; indice >= 0; indice--) {
  cadena += v[indice] + " ";
}
console.log(cadena);

/*
// Definir las variables
let cantidad: number = Number(prompt("Ingrese la cantidad de números:"));
let v: number[] = new Array(cantidad);
let indice: number;
// Cargar el arreglo
for (indice = 0; indice < cantidad; indice++) {
  v[indice] = Number(prompt(`Ingrese v[ ${indice} ]: `));
}
// Mostrar al revés
let cadena: string = "";
for (indice = cantidad - 1; indice >= 0; indice--) {
  cadena += v[indice] + " ";
}
console.log(cadena);
*/
