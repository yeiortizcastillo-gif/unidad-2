class Person{
    #cellphone;

    constructor(nombre, apellido, edad, estatura, peso, cellphone) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.estatura = estatura;
        this.peso = peso;

        this.#cellphone = cellphone;
    }

    sayHello() {
        console.log(`Hola a todas`);
    }

    introduce() {
        return ` Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`;
    }

    getcellphone() {
        return this.#cellphone;
    }

}; 

let persona1 = new Person("Arthur", "Agusto", 24, 1.8, 70, "963345006");

console.log(persona1); 
console.log(persona1.apellido);
console.log(persona1.peso); 
console.log(persona1.getcellphone())

console.log(`METODOS`);
persona1.sayHello(); 
console.log(persona1.introduce());

console.log("HERENCIA"); 

class chef extends Person {
    constructor (
        nombre,
        apellido,
        edad,
        estatura,
        peso,
        cellphone,
        restaurant,
        favoritefood
    ) {
        super(nombre, apellido, edad, estatura, peso, cellphone)
        this.restaurant = restaurant;
        this.favoritefood = favoritefood;
    }

        introduce() {
        return ` Hola, me llamo ${this.nombre} ${this.apellido} y soy chef del restaurante ${this.restaurant}.`;
    }
}

let chef1 = new chef(
    "Alfredo",
    "Linguini". 
    
)





//     this.bio function () {
// alert(this.nombre + " " + this.apellido+is + " is "
//     this.edad + "de edad. A él le gusta o interesa lo siguiente: "
//     this.interests[0] + " y " + this.interests[1] + '.');
// };
// this.saludo function () {
// alert("Hola, yo soy +" this.nombre + '.');
