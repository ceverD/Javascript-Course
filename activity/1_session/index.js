// Ejercicio 1
import "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2

// Ejercicio 3
console.log("Ejercicio 3");
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

// Ejercicio 4
console.log("Ejercicio 4");
for(var i = 0; i < 101; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}
console.log(i);


// Ejercicio 5

// Ejercicio 6
class Formatter {
    constructor() {
        this.prefix = "Hello ";
    }

    append(text) {
        console.log(this.prefix + text);
    }

    toLowerString(text) {
        console.log(text.toLowerCase());
    }
}

const formatter = new Formatter();
formatter.append("World"); // Result: Hello World
formatter.toLowerString("I'm Lucas"); // Result: i'm lucas

