// Refer to Task 6 in your Instructions to complete this task

for (let i = 0; i < 1; i++) {
  console.log("This is Task Six!");
};

let array = [];

const prompt = require("prompt-sync")();
const opcion = Number(prompt("Ingresa: (1) Para elegir cuantas lineas desplegar (2) para desplegar una linea en especifico: "));

if (opcion == 1) {
  const opcion2 = Number(prompt("Ingresa la cantidad de lines a mostrar: "));

  for (let index = 1; index <= opcion2; index++) {
    index % 3 == 0 && index % 5 == 0 && index % 7 == 0 ? (array.push("FizzBuzzWoof"), console.log("FizzBuzzWoof")) :
      index % 3 == 0 && index % 5 == 0 ? (array.push("FizzBuzz"), console.log("FizzBuzz")) :
        index % 3 == 0 && index % 7 == 0 ? (array.push("FizzWoof"), console.log("FizzWoof")) :
          index % 5 == 0 && index % 7 == 0 ? (array.push("BuzzWoof"), console.log("BuzzWoof")) :
            index % 3 == 0 ? (array.push("Fizz"), console.log("Fizz")) : index % 5 == 0 ? (array.push("Buzz"), console.log("Buzz")) :
              index % 7 == 0 ? (array.push("Woof"), console.log("Woof")) : (array.push(index), console.log(index));
  }

} else if (opcion == 2) {
  const opcion2 = Number(prompt("Ingresa la linea a mostrar: "));

  for (let index = opcion2; index < opcion2 + 1; index++) {
    index % 3 == 0 && index % 5 == 0 && index % 7 == 0 ? (array.push("FizzBuzzWoof"), console.log("FizzBuzzWoof")) :
      index % 3 == 0 && index % 5 == 0 ? (array.push("FizzBuzz"), console.log("FizzBuzz")) :
        index % 3 == 0 && index % 7 == 0 ? (array.push("FizzWoof"), console.log("FizzWoof")) :
          index % 5 == 0 && index % 7 == 0 ? (array.push("BuzzWoof"), console.log("BuzzWoof")) :
            index % 3 == 0 ? console.log("Fizz") : index % 5 == 0 ? (array.push("Buzz"), console.log("Buzz")) :
              index % 7 == 0 ? console.log("Woof") : (array.push(index), console.log(index));
  }

} else {
  console.log("¡Ingresaste una opcion invalida!");
}

console.log("\nMostrando datos del arreglo: \n");
console.log(array);
