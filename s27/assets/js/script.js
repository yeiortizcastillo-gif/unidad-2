/*Nombre largo*/

console.log(`Hi`);

var name = `Fiorellaa`;
if (name.length > 8) {
    console.log(`Que nombre tan largo tienes ${name}`);
}

/*Nombre corto*/

console.log(`Hi`);

var name2 = `Yei`;
if (name2.length < 5) {
    console.log(`Que nombre tan corto tienes ${name2}`);
}

/*Edad aplicando ELSE*/

console.log(`Tengo 18 años`);

let age = `18`;
if (age >= 18) {
    console.log(`Oh ya eres mayor de edad`);
} else {
    console.log(`Oh aún eres menor de edad`);
}

console.log(`Tengo 16 años`);

let age2 = 16;
if (age2 >= 18) {
    console.log(`Oh eres mayor de edad`);
} else {
    console.log(`Oh aún eres menor de edad`);
}

/*Reto de comparación de datos*/

let dato1 = 14;
let dato2 = 16;

if (dato1 > dato2) {
    console.log(`El número ${dato1} es mayor que ${dato2}`);
    } else if (dato1 < dato2) {
    console.log(`El número ${dato2} es mayor que ${dato1}`);
} else {
    console.log(`Ambos datos son iguales`)
} 

/*Reto de números a los días con SWITCH*/

let DayNum = 6; 

switch(DayNum) {

       case 1: 
    console.log(`Lunes`);
    break;

       case 2: 
    console.log(`Martes`);
    break;

        case 3: 
    console.log(`Miercoles`);
    break;

        case 4: 
    console.log(`Jueves`);
    break;

        case 5: 
    console.log(`Viernes`);
    break;

default: 
console.log(`Valor no valido`);
}