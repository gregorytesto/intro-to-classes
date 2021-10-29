// let pets = [
//     {
//         name: "Rico",
//         species: "Feline",
//         hasFur: true,
//         age: 13
//     },
//     {
//         name: "Scout",
//         species: "Canine",
//         hasFur: true,
//         age: 3
//     },
//     {
//         name: "Deloba",
//         species: "Canine",
//         hasFur: true,
//         age: 8
//     }
// ];

class Pet {
    constructor(name, species, hasFur, age){
        this.name = name;
        this.species = species;
        this.hasFur = hasFur;
        this.age = age;
    }
    getDescription(){
        console.log(`This pet's name is ${this.name}, they're a ${this.species} and ${this.age} years old.`);
    }
}

let pet1 = new Pet("Deloba", "Canine", true, 8);

let pet2 = new Pet("Scout", "Canine", true, 3);

let pet3 = new Pet("Rico", "Feline", true, 13);

pet3.getDescription();



// let newPetArr = [ pet1, pet2, pet3 ];
