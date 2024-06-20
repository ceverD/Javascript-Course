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

// Ejercicio 3

// Ejercicio 4
