// Déclaration d'un objet
const x = {};
console.log(x);

const y = Object();
console.log(y);

const z = new Object();
console.log(z);

//propriétés

const terre = {
  satellite: "Lune",
  population: 7e7,
  temperature: {
    min: -70,
    max: 60,
  },
  isOld: false,
  getTemperature: function () {
    console.log("15");
  },
};
//aucune spécificité dans l'ordre déclaré !
console.log(terre["satellite"]);
console.log(terre.population);

const prop = "temperature";
console.log(terre[prop]);

const copy = terre;
copy.isOld = true;
console.log(terre);

terre.getTemperature();
