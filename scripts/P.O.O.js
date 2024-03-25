// Creamos un objeto para manejar la lógica de usuarios
const UserHandler = {
    users: [],

    registerUser: function(nombre, password) {
        if (nombre.trim() === "" || password.trim() === "") {
            alert("Por favor ingresa tu nombre y contraseña");
            return;
        }
        this.users.push({ nombre, password });
        console.log("Usuario registrado con éxito:", { nombre, password });
    },

    loginUser: function(nombre, password) {
        const userFound = this.users.some(user => user.nombre === nombre && user.password === password);
        if (userFound) {
            alert("Usuario registrado");
        } else {
            alert("Usuario no registrado");
        }
    }
};

function register() {
    const nombre = document.getElementById("nombre").value;
    const password = document.getElementById("password").value;
    UserHandler.registerUser(nombre, password);
    clearInputFields();
}

function login() {
    const nombre = document.getElementById("nombreLogin").value;
    const password = document.getElementById("passwordLogin").value;
    UserHandler.loginUser(nombre, password);
    clearInputFields();
}

function clearInputFields() {
    document.getElementById("nombre").value = "";
    document.getElementById("password").value = "";
    document.getElementById("nombreLogin").value = "";
    document.getElementById("passwordLogin").value = "";
}
