const obj = {
  a: "un",
  b: "deux",
  c: "trois",
};

for (let prop in obj) {
  console.log(prop);
  console.log(obj[prop]);
}

//tableau de clés
Object.keys(obj);
console.log(Object.keys(obj));

// tableau de valeurs
Object.values(obj);
console.log(Object.values(obj));

// tableau de clés et de valeurs
Object.entries(obj);
console.log(Object.entries(obj));
