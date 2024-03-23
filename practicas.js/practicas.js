let campos=[]
function funcionar(){
const nombre=document.getElementById("nom").value
const apellido=document.getElementById("ape").value
const celular=document.getElementById("cel").value
const correo=document.getElementById("cor").value
    if(nombre!==""&&apellido!==""&&celular!==""&&correo!==""){
    let users= Math.random()
    users= new construir(nombre,apellido,celular,correo)
    campos.push(users)
    ver(campos)
}else{console.log("Complete todos los campos")}
}

function construir(nombre,apellido,celular,correo){
    this.nombre=nombre
    this.apellido=apellido
    this.celular=celular
    this.correo=correo
}

function ver(campos){

  console.log(campos)
}