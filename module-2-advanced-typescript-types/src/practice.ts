interface IAnimal {
  species: string;
}

interface IDog extends IAnimal {
  breed: string;
}

const dog: IDog = {
  species: "Dogos",
  breed: "Puppy",
};
