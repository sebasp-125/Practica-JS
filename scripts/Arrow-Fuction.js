const greet = (name) => console.log("Hello", name);
greet("Sebas");

const add = (a, b) => a + b;
console.log(add(1, 2));

// Passing values to ForEach.
try {
    const numbers = [1, 2, 4];
    numbers.forEach((x, index) => {
        console.log(`The element ${x} is at position ${index}`);
    });
} catch (error) {
    console.log("Error while completing forEach:", error);
}

// Summing Array values
try {
    const numbers = [1, 2, 4];
    for (let i = 0; i < numbers.length - 1; i++) {
        const sum = numbers[i] + numbers[i + 1];
        console.log(`The element ${numbers[i]} at position ${i} is summed with the next element ${numbers[i + 1]} and the result is ${sum}`);
    }
} catch (error) {
    console.log("Error while summing the array:", error);
}
