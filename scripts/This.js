const hause = {
    DogName: 'Claudo',
    DogGreeting: function () {
        console.log(`Hi , I'm ${this.DogName}`);
    }
}


function Estudiante(Hora, Porque) {
    Hora <= 12 ?  console.log(`Llegaste a tiempo ${Hora}`) : console.log(`Llegaste tarde ${Hora}`);
    console.log(`El estudiante ${this.NombrePerro} llegó a clases, ¿por qué? Porque ${Porque}!`);
}
const casa1 = { NombrePerro: "Buddy" };
Estudiante.call(casa1, 18, "Llegué a clases para mejorar mi inteligencia");

const almuerzo = (proteina , verdura) => {
    return `${proteina} , ${verdura}`
}
almuerzo('🥩' , '🍆')