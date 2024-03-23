//Objetos Literales
/* Escribir atributos y metodos y asignarlos


*/

let nombre="helli",
edad=7;

const perro={
    nombre:nombre,
    edad:edad,

    ladrar:function(){
        console.log("guau guau")
    }
}

console.log(perro)
perro.ladrar()

const dog={
    nombre,
    edad, //aquí no declaramos nuevas variables, js interpreta de que di creasemos una variable trataríamos los mismos valores del objeto anterior, por lo que solamente ponemos los valores anteriores.
    raza: "callejero",
    ladrar(){
        console.log("guau guau") //de esta manera declaramos una función
    }
}