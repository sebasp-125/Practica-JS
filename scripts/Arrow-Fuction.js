
const Hello = (x) => console.log("Hola", x);
Hello("Sebas")

const sumar = (a, b) => a + b;
console.log(sumar(1, 2));

// Pasando valores al For || forEach.
try {
    const number = [1, 2, 4]
    number.forEach((x, index) => {
        console.log(`El Elemento ${x} Esta en la posicion: ${index}`);
    });
} catch (error) {
    console.log("Error al Completar el ForEach", error);
}

// Sumando valores Array
try {
    const numbers = [1, 2, 4];
    for (let i = 0; i < numbers.length - 1; i++) {
        const sum = numbers[i] + numbers[i + 1];
        console.log(`The element ${numbers[i]} position ${index} is summed with the next element ${numbers[i + 1]} and the result is ${sum}`);
    }
} catch (error) {
    console.log("Error al hacer la suma del Array:", error);
}