// Ejercicio 1
const getKeys = (objeto) => {
  return Object.keys(objeto);
};

let person = {
  name: "Lucas",
  age: 27,
  profession: "Developer",
};

const personKeys = getKeys(person);
console.log(personKeys); // [ 'name', 'age', 'profession' ]

// Ejercicio 2
// 1.	En el ámbito global:
function foo() {
  this.a = 2;
}
foo();
console.log(a); // 2

// 2.	En el contexto de un objeto:
const obj = {
  foo: function() {
      this.a = 2;
  }
};
obj.foo();
console.log(obj.a); // 2

// 3.	Usando .call(), .apply() o .bind():
const bar = function() {
  console.log(this.baz);
};
bar.call({ baz: 1 }); // 1

// 4.	En una función constructora (usando new):
function Point2D(x, y) {
  this.x = x;
  this.y = y;
}
const p1 = new Point2D(1, 2);
console.log(p1.x); // 1
console.log(p1.y); // 2

// 5.	En tiempo de ejecución, según el contexto actual:
const Cat = function(name, sound) {
  this.name = name;
  this.sound = sound;
  this.makeSound = function() {
      console.log(this.sound);
  };
};
const myCat = new Cat("Miau", "¡Miau!");
myCat.makeSound(); // ¡Miau!

// Ejercicio 3

// Ejercicio 4

// Ejercicio 5

// Ejercicio 6

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};
