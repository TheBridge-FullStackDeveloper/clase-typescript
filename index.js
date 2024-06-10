"use strict";
let id = 5;
let firstname = "Francesc";
let isPublished = false;
let x = "María";
//union
let z;
z = "22";
let ids = [1, 2, 3, 4, 5];
let arr = [20, true, "Lu"];
let arr2 = [6, "Vero", []];
// ids.push("22") no se puede
console.log(ids);
//tuplas
let person = [23, "Frances", true];
let students;
students = [
    [1, "Nico"],
    [2, "Álvaro"],
    [3, "Demis"],
];
const user = {
    id: 1,
    name: "Tito",
};
const user2 = {
    id: 2,
    name: "Jaime",
};
const user3 = {
    id: 3,
    name: "Tifa",
};
function log(message) {
    console.log(message);
}
const sayFirstname = (firstname) => {
    console.log("eee");
    return firstname;
};
class Dog {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
class Salchicha extends Dog {
    constructor(age, name, breed) {
        super(age, name);
        this.breed = breed;
    }
}
const toni = new Dog(11, "Toni");
const toniSalchicha = new Salchicha(7, "Oscar Mayer", "Salchicha");
console.log(toniSalchicha);
