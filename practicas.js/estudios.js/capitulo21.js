//Arroy Functions 
/*

Una nueva forma de crear Funciones anonimas que sean expresadas



*/
/*
const saludo=function(){  //Funcion expresada, primero se declara y luego de usa
    console.log("hola")
} 

saludo()*/

//function saludo(){} //función declarada, se puede usar incluso arriba, antes de ser declarada
/*
const saludar=nombre=>  //se quitan las llaves unicamente si tienes solo una línea de código, igual si solo le mandan un valor o no le mandan ninguno
    console.log(`hola ${nombre}`)
saludar("andres")

const sumar=(a,b)=>a+b //recibimos dos valores, entonces usamos parentesis. El return lo omitimos y dejamos la operación neta, solo si devolvemos solo un valor de una unica línea de código
console.log(sumar(9,9))
*/
//const numeros=[1,2,3,4,5]
/*
numeros.forEach(function(i,index){  //i recorre los elementos, y el index las posiciones
    console.log(`El elemento ${i} está en la posición ${index}`)
})*/
//en una arrow function
/*numeros.forEach((i,index)=>
    console.log(`El elemento ${i} está en la posición ${index} ---`) //de esta manera recorremos un array usando un array function
)*/

function perro(){
    console.log(this) //this representa la variable, funcion u objeto como tal en su contexto
}
//perro()
const perros={
    nombre:"Leon",
    ladrar:()=>{ //si usamos arrow ya no respeta el contexto en el que se encuentran = el objeto, sino a sí misma globalmente, es decir, la ventana window como tal. Esta practica está mal vista, mejor tratalos como una function normal
        console.log(this)
    }
}
perros.ladrar() //this objeto

