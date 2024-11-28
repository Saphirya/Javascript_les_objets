const book = {
  // author: {
  //   name: "Jean",
  // },
};

// const username = book.author.name;
// console.log(username);

if (book?.author?.address?.city) {
  console.log("il y a un nom");
} else {
  console.log("il n'y a pas de nom");
}
//Ne pas en abuser
