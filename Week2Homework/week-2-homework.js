const pizzaPlace = "Gigi's pizza";
let numberOfToppings = 10;

console.log(pizzaPlace, numberOfToppings);

console.log(typeof pizzaPlace, typeof numberOfToppings);

console.log(`${pizzaPlace} offers ${numberOfToppings} different types of toppings!!`)

numberOfToppings = 5;

if (numberOfToppings < 10 || numberOfToppings === "A whole lot of pizza.") {
  console.log("Quality");
} else {
  console.log("not quantity");
}

for (let i = 2; i < 10 ; i += 2) {
  console.log("numberOfToppings" + i);
}

