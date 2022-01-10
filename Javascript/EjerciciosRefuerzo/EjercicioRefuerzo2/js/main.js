let persona1 = {
    nombre : "Manel",
    apellido : "Barreda",
    hobbies :{
        hobbie1:"Comics",
        hobbie2:"Videojuegos",
        hobbie3:"Netflix"
    }
}

let persona2 = {
    nombre : "Christian",
    apellido : "Ochoa",
    hobbies :{
        hobbie1:"Billar",
        hobbie2:"Cocinar",
        hobbie3:"Ciclismo"
    }
}

let persona3 = {
    nombre : "Rafael",
    apellido : "García",
    hobbies :{
        hobbie1:"Videojuegos",
        hobbie2:"Guitarra",
        hobbie3:"Leer"
    }
}

let hobbiePrompt1= prompt("Dime un hobbie")
let hobbiePrompt2= prompt("Dime un hobbie")
let hobbiePrompt3= prompt("Dime un hobbie")

persona1.hobbies.hobbie1 = hobbiePrompt1

persona2.hobbies.hobbie2 = hobbiePrompt2

persona3.hobbies.hobbie1 = hobbiePrompt3

console.log(persona1)
console.log(persona2)
console.log(persona3)