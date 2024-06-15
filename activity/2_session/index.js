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
