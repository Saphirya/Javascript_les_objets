const a = {
  name: "John",
  foo: {
    bar: "zoo",
  },
};

//shallow copy
// const b = Object.assign({}, a);
// const c = { ...a };

//deep
const b = JSON.parse(JSON.stringify(a));

b.name = "TATA";
b.foo.bar = "123";
console.log(b);
console.log(a);
