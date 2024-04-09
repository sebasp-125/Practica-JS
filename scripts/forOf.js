const array=[1,2,3,4]
let sum=0
for(i of array){
    sum+=i
}
console.log(sum)


const obejt = {
    sebas: "Sebas" ,
    apellido: "montaño"
}
//El for in es para iterar sobre objetos
for (const key in obejt) {
  console.log(` ${obejt[key]}`)
}