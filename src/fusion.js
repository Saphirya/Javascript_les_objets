//combiner des objets grace a assign

const terre1 = {
  population: 5e5,
  satellite: "Lune",
};

const terre2 = {
  temperature: {
    min: -70,
    max: 60,
  },
  isOld: false,
};
// on merge les deux objets dans un objet vide
console.log(Object.assign({}, terre1, terre2));

//on décomponse toutes les keys et on les met dans notre nouvel objet
const terre = { ...terre1, ...terre2 };
console.log(terre);
