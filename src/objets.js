// Déclaration d'un objet
const x = {};
console.log(x);

const y = Object();
console.log(y);

const z = new Object();
console.log(z);
const population = 50;
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

const { temperature, ...reste } = terre;
console.log(temperature, reste);
//aucune spécificité dans l'ordre déclaré !
console.log(terre.temperature);
console.log(terre.population);
console.log(terre.satellite);

const prop = "temperature";
console.log(terre[prop]);

const copy = terre;
copy.isOld = true;
console.log(terre);

terre.getTemperature();

const satellites = "Mars";
const populations = 0;
const temperatures = {
  min: -140,
  max: 20,
};

const pop = "populations";
const sat = "satellites";
const Lune = {
  [sat]: satellites,
  [pop]: populations,
  temperatures,
  isOld: false,
};
console.log(Lune);
