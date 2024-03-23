//prototipos
/*

POO Pogramacion Orientada a Objetos 


Clases - modelo a seguir
Objetos - Instancia de una clase, procedencia de un objeto = biblioteca, copia de ese modelo a seguir
 - Atributos - caracteristica o propiedad de un objeto = variables dentro de un objeto
 - Metodos = son las acciones que un objeto puede realzar = funciones
 
Un prototipo puede entenderse como un mecanismo que hereda atributos y metodos de un objeto padre

 
 */

//Cómo crear varios objetos sin repetir código y objetos? Usemos un constructor y clases
//Al crear clases siempre usemos mayusculas entre palabras pegadas
//Y al crear objetos usemos palabras en minusculas

function estudiantes(nombre,genero,edad,curso){
//atributos
    this.nombre=nombre
    this.genero=genero
    this.edad=edad
    this.curso=curso

}
// es buena practica dejar los metodos fuera del constructor.
estudiantes.prototype.sonar=function(){
    console.log("Hola")
}
// de esta manera, evitamos que se duplique la función sonar cada vez que creamos un nuevo objeto, sino que queda anclado a la instancia de la función estudiantes como tal.

const estudiante1=new estudiantes("Andres Gonzalez","Masculino","21","Analisis de Sistemas"),
estudiante2=new estudiantes("Sebastián Perez","Masculino","19","Derecho Penal");

console.log(estudiante1,estudiante2)
