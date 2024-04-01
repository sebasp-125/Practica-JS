const hause = {
    DogName: 'Claudo',
    DogGreeting: function () {
        console.log(`Hi , I'm ${this.DogName}`);
    }
}

//----------------------------------------------------------------
function Estudiante(Hora, Porque) {
    Hora <= 12 ?  console.log(`Llegaste a tiempo ${Hora}`) : console.log(`Llegaste tarde ${Hora}`);
    console.log(`El estudiante ${this.NombrePerro} llegó a clases, ¿por qué? Porque ${Porque}!`);
}
const casa1 = { NombrePerro: "Buddy" };
// Estudiante.call(casa1, 18, "Llegué a clases para mejorar mi inteligencia");

//----------------------------------------------------------------
const almuerzo = (proteina , verdura) => {
    return `${proteina} , ${verdura}`
}
almuerzo('🥩' , '🍆')
//----------------------------------------------------------------

const Owner = 'Lucy',
Anddres = '43C Adventure'

function Cat(Owner , Address) {
    console.log(`Hi , I'm ${this.DogName} and i live with ${Owner} and i is ${Address}`);
}
const NewHouse = {
    DogName : 'Michael'
}
// Cat.call(NewHouse, Owner, Anddres)
//----------------------------------------------------------------

const caricatura = {nombre : "Vaca and Chiken"}

function recuerdo(personaje) {
    console.log(`${this.nombre}, My caricatura favorites, i love see the adventurs the ${personaje}`);
}
recuerdo.call(caricatura , "Vaca")