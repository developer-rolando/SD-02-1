// Refer to Task 3 in your Instructions to complete this task

for (let i = 0; i < 1; i++) {
    console.log("This is Task Three!");
  };

     //Imprimiendo numeros del 1 - 105 e imprimiento FizzBuzz si es multiplo de 3 y 5, 
     // Fizz si solo de 3, Buzz si solo de 5
for (let index = 1; index <= 105; index++) {
    index % 3 == 0 && index % 5 == 0? console.log("FizzBuzz") : index % 3 == 0 ? console.log("Fizz") : index % 5 == 0 ? console.log("Buzz") : console.log(index);
}