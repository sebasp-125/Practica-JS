
let UserRegistrados = []
console.log(UserRegistrados);

function Register(e) {
    const nombre = document.getElementById("nombre").value;
    const password = document.getElementById("password").value;
    if (nombre.trim() === "" || password.trim() === "") {
        alert("Please enter you name and password")
        return;
    }

    function Usuario(nombre, password) {
        this.nombre = nombre;
        this.password = password;
    }

    const nuevoUsuario = new Usuario(nombre, password);
    UserRegistrados.push(nuevoUsuario);
    console.log("Usuario registrado con éxito:", nuevoUsuario);

    document.getElementById("nombre").value = "";
    document.getElementById("password").value = "";
}

function Login() {
    const nombre = document.getElementById("nombreLogin").value;
    const password = document.getElementById("passwordLogin").value;
    console.log(nombre, password);
    let usuarioEncontrado = false;

    for (let i = 0; i < UserRegistrados.length; i++) {
        if (nombre === UserRegistrados[i].nombre && password === UserRegistrados[i].password) {
            usuarioEncontrado = true;
            break;
        }
    }
    if (usuarioEncontrado) {
        alert("Usuario registrado")
    } else if (usuarioEncontrado == false) {
        alert("Usuario No Registrado")
    }
}