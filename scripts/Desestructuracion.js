// const numeros = [1 , 2 , 3]
// const [one , two , three] = numeros
// console.log(one, two, three);


// // Object
// //Inputs capturar el valor de los input alamacenarlos en el objeto, para despues
// //desestructurarlo y aplicarlo en H1 y/o H2
// let persona = {
//     nombre : "sebas" ,
//     apellido : "perez",
//     telefono : "3007058995",
// }

// let {nombre , apellido , telefono} = persona;
// console.log(nombre , apellido , telefono);

function capturarValores() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;

    let PaintDate = document.getElementById("PaintDate")
    let almacenamiento = {
        ObjNombre : nombre, 
        ObjApellido :apellido,
        ObjeTelefono : telefono
    }

    console.log(almacenamiento.ObjNombre);
    let {ObjNombre , ObjApellido , ObjeTelefono} = almacenamiento;


    if (ObjNombre == '' || ObjApellido == '' || ObjeTelefono == '') {
        alert("Debe de llenar todos los campos, Vuelva.")
        return;
    }

    PaintDate.innerHTML = `
    <h1>Tu nombre es: ${ObjNombre}</h1>
    <h2>Y tu apellido es: ${ObjApellido}</h2>
    <h4>Recuerda tu telefono: ${ObjeTelefono}</h4>
    `
}

