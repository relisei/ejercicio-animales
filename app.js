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
