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
function startVehicle(vehicle) {
    vehicle.turnOnEngine();
    if (isCar(vehicle)) {
        vehicle.pressPedal();
    }
    else {
        vehicle.openThrottle();
    }
}
function isCar(vehicle) {
    return vehicle.pressPedal !== undefined;
}
var myCar = {
    tires: 4,
    turnOnEngine: function () {
        console.log('Car engine started.');
    },
    pressPedal: function () {
        console.log('Car pedal pressed.');
    }
};
var myMotorcycle = {
    tires: 2,
    turnOnEngine: function () {
        console.log('Motorcycle engine started.');
    },
    openThrottle: function () {
        console.log('Motorcycle throttle opened.');
    }
};
startVehicle(myCar);
startVehicle(myMotorcycle);

// Ejercicio 4
function removeFirstEntry(arr) {
    return arr.slice(1);
}

var strArray = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
var numArray = [1, 2, 3, 4, 5, 6, 7];
var mixedArray = ['Hello', 'I', 'have', 3, 'tasks'];
var unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];

var newStrArray = removeFirstEntry(strArray);
var newNumArray = removeFirstEntry(numArray);
var newMixedArray = removeFirstEntry(mixedArray);
// const newUnsupportedArray = removeFirstEntry(unsupportedArray); --> will fail

console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];
