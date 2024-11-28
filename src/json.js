const obj = {
  firstname: "John",
  lastname: "Doe",
  age: 25,
};
console.log(JSON.stringify(obj));
console.log(JSON.parse('{"firstname":"John","lastname":"Doe","age":25}'));

//json ne donne acces a aucune méthode
