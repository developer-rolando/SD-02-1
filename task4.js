// Refer to Task 4 in your Instructions to complete this task

for (let i = 0; i < 1; i++) {
  console.log("This is Task Four!");
};

//Imprimiendo numeros del 1 - 105, tambien FizzBuzzWoof si es multiplo de 3, 5 y 7,
// FizzWoof si es multiplo de 3 y 7, BuzzWoof si es multiplo de 5 y 7,
// Fizz si solo de 3, Buzz si solo de 5 y Woof si solo es de 7
for (let index = 1; index <= 105; index++) {
  index % 3 == 0 && index % 5 == 0 && index % 7 == 0 ? console.log("FizzBuzzWoof") :
    index % 3 == 0 && index % 5 == 0 ? console.log("FizzBuzz") :
      index % 3 == 0 && index % 7 == 0 ? console.log("FizzWoof") :
        index % 5 == 0 && index % 7 == 0 ? console.log("BuzzWoof") :
          index % 3 == 0 ? console.log("Fizz") : index % 5 == 0 ? console.log("Buzz") :
            index % 7 == 0 ? console.log("Woof") : console.log(index);
}