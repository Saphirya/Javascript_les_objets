const terre = {
  population: 5e5,
  satellite: "Lune",
  temperature: {
    min: -70,
    max: 60,
  },
  isOld: false,
};
//ajouter une valeur
terre.habitable = true;
console.log(terre);
//supprimer une valeur
delete terre.satellite;
console.log(terre);
//pour ne pas supprimer la clé
terre.satellite = null;
terre.population = null;
console.log(terre);
if (terre.hasOwnProperty("test")) {
  console.log("ok !!!!");
} else {
  console.log("ou pas");
}
const obj = {};
if (obj.prop) {
  console.log("bonjour");
}

const voiture = {
  model: "BMW",
  type: "grande",
  nb_place: 5,
  couleur: "blanc",
};
// pour récuperer les propriétés sauf le type
const { type, ...copyVoiture } = voiture;
console.log(copyVoiture);
