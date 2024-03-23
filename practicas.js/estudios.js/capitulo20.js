//REST y operadores spread
/* 
Sirve para frameworks y reacts.




*/

//REST forma de agregar parametros infinitos a una función o variable. Usado cuando no sabemos cuántos elementos vamos a recibir
function sumar (a,b,...c){
    let resultado=a+b;

    c.forEach(function(n){
        resultado+=n
    }
    )
    return resultado;
}
console.log(sumar(1,2,4,8))


let arr1=[1,2,3,4,5],
arr2=[6,7,8,9,0];

console.log(arr1,arr2)
/*
const arr3=[arr1,arr2] //tiene dos posiciones
console.log(arr3)*/
const arr3=[...arr1,...arr2] //aquí mezclamos ambos arreglos y creamos uno solo nuevo.
console.log(arr3)