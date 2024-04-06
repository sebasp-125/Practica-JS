// let {name , lastName , phone} = person;
// console.log(name , lastName , phone);

function captureValues() {
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let phone = document.getElementById("phone").value;

    let outputElement = document.getElementById("output");
    let storage = {
        ObjName: name,
        ObjLastName: lastName,
        ObjPhone: phone
    };

    console.log(storage.ObjName);
    let { ObjName, ObjLastName, ObjPhone } = storage;

    if (ObjName == '' || ObjLastName == '' || ObjPhone == '') {
        alert("You must fill in all fields. Please try again.");
        return;
    }

    outputElement.innerHTML = `
    <h1>Your name is: ${ObjName}</h1>
    <h2>Your last name is: ${ObjLastName}</h2>
    <h4>Remember your phone number: ${ObjPhone}</h4>
    `;
}
