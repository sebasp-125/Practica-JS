function funcionar() {
    let nombre = document.getElementById("nom").value
    let apellido = document.getElementById("ape").value
    let persona = {
        Name: nombre,
        Last: apellido
    }
    des(persona)
}
function des(persona) {
    let div = document.getElementById("divisito")
    let inyect
    let { Name,Last } = persona
    console.log(Name, Last)
    inyect = `<h1>${Name}</h1> <br>
            <h2>${Last}</h2>`
    div.innerHTML = inyect
}