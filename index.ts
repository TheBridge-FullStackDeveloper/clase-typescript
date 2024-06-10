let id: number = 5;
let firstname: string = "Francesc";
let isPublished: boolean = false;
let x: any = "María";

//union
let z: string | number | null;
z = "22";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [20, true, "Lu"];
let arr2: Array<string | number | []> = [6, "Vero", []];

// ids.push("22") no se puede

console.log(ids);

//tuplas
let person: [number, string, boolean] = [23, "Frances", true];

let students: [number, string][];

students = [
  [1, "Nico"],
  [2, "Álvaro"],
  [3, "Demis"],
];

//tipado objetos
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Tito",
};
const user2: User = {
  id: 2,
  name: "Jaime",
};

interface UserInterface {
  id: number;
  name: string;
}

const user3: UserInterface = {
  id: 3,
  name: "Tifa",
};

//interfaces se puede hacer casi lo mismo que el tipo solo que además `pueden heredar
interface CatInterface {
  name: string;
  legs: number;
  isDogFriendly: boolean;
}

interface BreedInterface extends CatInterface {
  breed: string;
}

function log(message: string | number): void {
  console.log(message);
}

const sayFirstname = (firstname: string): string => {
  console.log("eee");
  return firstname;
};

interface DogInterface {
  age: number;
  name: string;
  register(): string;
}

class Dog implements DogInterface {
  age: number;
  name: string;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

class Salchicha extends Dog{
    breed:string;
    constructor(age: number, name: string,breed:string){
        super(age, name)
        this.breed = breed
    }
}

const toni = new Dog(11, "Toni");
const toniSalchicha = new Salchicha(7,"Oscar Mayer","Salchicha")
console.log(toniSalchicha);

