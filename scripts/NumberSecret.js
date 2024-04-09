
function NumberSecret(NumberUser) {
    const NumberSecret = Math.floor(Math.random() * 10)
        if (NumberUser < 0) {
            console.log("The value is minor to zero.")
            return 
        } 
        isNaN(parseInt(NumberUser))
        ? console.log("The value no is a number")
        : NumberUser == NumberSecret
            ? console.log("Yes, Of Course. You guessed the number, Happy Happy!")
            : console.log("I'm Sorry no you guessed the number the number was " + NumberSecret + ".");   
}

NumberSecret(4)