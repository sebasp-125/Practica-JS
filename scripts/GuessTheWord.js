let a = ['a', 'b', 'c', 'd', 'e', 'f'];
let randomValue = a[Math.floor(a.length * Math.random())];
let Counter = 0;

function Play(Word) {
    randomValue
        ? console.log("The Value is not a Character")
        : Word == randomValue
            ? console.log("Yes. Of Course, You Guessed it!")
            : (console.log("I'm sorry, The Character is not the same as the Random", randomValue), Counter++, console.log("Attempts to play ", Counter));
}

while (Counter <= 3) {
    Play(23);
    break;
}
