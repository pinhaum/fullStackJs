let spaceshipNames = ["Elemental", "Darwin", "Ártemis", "Supernova"];

console.log(spaceshipNames);

let removedSpaceships = spaceshipNames.splice(
  1, //a partir da posição 1
  2, // remover 2 itens
  "Deméter", // adicionar os elementos seguintes a partir do índice específicado
  "Puller",
  "Golias"
);

console.log(spaceshipNames);
console.log(removedSpaceships);

let extractedNames = spaceshipNames.slice(1, 3);
// cira um novo array a partir da posição 1 até a posição 3, o que estiver na posição 3 não entra no novo array

console.log(spaceshipNames);
console.log(extractedNames);

//
let hitchedSpaceships = [
  "Deméter",
  "Darwin",
  "Supernova",
  "Fenis",
  "Puller",
  "asdfmoviesss",
];

hitchedSpaceships.forEach(function (currentSpaceship, index) {
  console.log(`Nave ${currentSpaceship}\nÍndice ${index}`);
});

let upCasedSpaceships = hitchedSpaceships.map(function (currentSpaceship) {
  let upcased = currentSpaceship.toUpperCase();
  return upcased;
});

console.log(upCasedSpaceships);

let sevenChars = hitchedSpaceships.filter((element) => {
  return element.length >= 7;
});

console.log(sevenChars);

sevenChars = hitchedSpaceships.find((element) => {
  return element.length >= 7;
});
