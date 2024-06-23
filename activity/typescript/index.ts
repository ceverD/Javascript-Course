// Ejercicio 1
interface Person {
    name: string;
    age: number;
    profession: string;
}

const personToArray = (person: Person): (string | number)[] => {
    return [person.name, person.age, person.profession];
};

const lucas: Person = {
    name: 'Lucas',
    age: 28,
    profession: 'Full Stack',
};

const result = personToArray(lucas);
console.log(result); // ["Lucas", 28, "Full Stack"]

// Ejercicio 2
function sumOrConcatenate(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return `${a}-${b}`;
    } else {
        return `${a}:${b}`;
    }
}

console.log(sumOrConcatenate(4, 3)); // --> 7
console.log(sumOrConcatenate(4, "hello")); // --> 4:hello 
console.log(sumOrConcatenate("hello", "world")); // --> hello-world


// Ejercicio 3
interface Car {
    tires: number;
    turnOnEngine(): void;
    pressPedal(): void;
}

interface Motorcycle {
    tires: number;
    turnOnEngine(): void;
    openThrottle(): void;
}

function startVehicle(vehicle: Car | Motorcycle) {
    vehicle.turnOnEngine();
    if (isCar(vehicle)) {
        vehicle.pressPedal();
    } else {
        vehicle.openThrottle();
    }
}

function isCar(vehicle: Car | Motorcycle): vehicle is Car {
    return (vehicle as Car).pressPedal !== undefined;
}

const myCar: Car = {
    tires: 4,
    turnOnEngine() {
        console.log('Car engine started.');
    },
    pressPedal() {
        console.log('Car pedal pressed.');
    }
};

const myMotorcycle: Motorcycle = {
    tires: 2,
    turnOnEngine() {
        console.log('Motorcycle engine started.');
    },
    openThrottle() {
        console.log('Motorcycle throttle opened.');
    }
};

startVehicle(myCar);
startVehicle(myMotorcycle);


// Ejercicio 4
