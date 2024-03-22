let Arrays = [21, 12, 544, 5];
let Maximo = Math.max(Arrays.length);
let Minimo = Math.min(Arrays.length);

Arrays.forEach(element => {

    if (element > Maximo) {
        Maximo = element;
    }

    if (element < Minimo) {
        console.log("entro: ", Minimo);
        Minimo = element;
    }
});

console.log("el numero maximo es ", Maximo);
console.log("el numero Minimo es ", Minimo);
