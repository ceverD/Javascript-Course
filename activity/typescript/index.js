// Ejercicio 1
var personToArray = function (person) {
    return [person.name, person.age, person.profession];
};
var lucas = {
    name: 'Lucas',
    age: 28,
    profession: 'Full Stack',
};
var result = personToArray(lucas);
console.log(result); // ["Lucas", 28, "Full Stack"]

// Ejercicio 2
function sumOrConcatenate(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return "".concat(a, "-").concat(b);
    }
    else {
        return "".concat(a, ":").concat(b);
    }
}
console.log(sumOrConcatenate(4, 3)); // --> 7
console.log(sumOrConcatenate(4, "hello")); // --> 4:hello 
console.log(sumOrConcatenate("hello", "world")); // --> hello-world

// Ejercicio 3
// Ejercicio 4
