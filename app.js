const animalA = {
  id: 1,
  name: "foca",
  age: 23,
  weight: 250,
  species: "mamífero",
};

const animalB = {
  id: 2,
  name: "rinoceronte blanco",
  age: 45,
  weight: 500,
  species: "mamifero",
  extinction: 2018,
};

const getEspecies = (animal) => {
  return animal.species;
};

getEspecies(animalA);

const isExtinct = (animal) => Object.hasOwn(animal, "extinction");

console.log(isExtinct(animalB));

const printAnimal = (animal) => {
  return `El animal ${animal.name} es un ${animal.species} de ${animal.age} años de edad y pesa ${animal.weight} kg`;
};

printAnimal(animalA);
