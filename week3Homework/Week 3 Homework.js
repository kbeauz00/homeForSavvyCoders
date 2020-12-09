let pizzaToppings = ["pepperoni ",  "pineapple ",  "bacon ",   "vegetable. "];



function greetCustomer (toppings) {
  let message = `Welcome to GIGI's pizza, our toppings are: `

  for (let i = 0; i < toppings.length; i++){
    message += toppings[i];
  }
  return message;
};

let welcome = greetCustomer(pizzaToppings)
console.log(welcome)

// 3

function getPizzaOrder (size, crust ,...toppings) {
  console.log(`One ${size} ${crust} pizza crust with ${toppings} toppings, coming up!!! `)
 
//  let list =["size", "crust", "toppings"];
//  return list;
}


let myPizzaList = getPizzaOrder("large", "thick", pizzaToppings )
console.log(myPizzaList);

// 4

function preparePizza(size, crust, toppings){
  console.log("Cooking pizza");
  
//   let pizzaObject = {
//     size: size,
//     crust: crust,
//     toppings: toppings
//   }
//   return pizzaObject;
}

let obj = preparePizza("large", "thick", pizzaToppings)
console.log(obj)
//  5

function servePizza(size, crust, toppings){
  console.log(`Order up! Here's your large thick crust pizza with ${toppings} Enjoy!`)
  
//   let pizzaObject = {
//     size: "large",
//     crust: "thick",
//     toppings: "5"
//   }
//   return pizzaObject;
};

obj = servePizza("large", "thick", pizzaToppings)
console.log(obj)


console.log(preparePizza, getPizzaOrder, preparePizza, servePizza)
