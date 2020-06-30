/**
1 ly = 0,306601 pc
1 ly = 63241,1 AU
1 ly = 9,5 * Math.pow(10,12)

 */

/////////////////////////////
let distanceInLY = prompt("Digite a quantidade em Anos-Luz");

let chosenOption = prompt(
  "Para qual unidade deseja converter? \n1. Parsec\n2.Unidade Astronômica\n3.Quilômetros"
);

let choserUnity;
let convertedDistance;
let pc = 0.306601;
let au = 63241.1;
let km = 9.5 * Math.pow(10, 12);

switch (chosenOption) {
  case "1":
    choserUnity = "Parsec";
    convertedDistance = distanceInLY * pc;
    break;
  case "2":
    choserUnity = "Unidade Astronômica";
    convertedDistance = distanceInLY * au;
    break;
  case "3":
    choserUnity = "Quilômetros";
    convertedDistance = distanceInLY * km;
    break;
  default:
    choserUnity = "Unidade não identificada";
    convertedDistance = "Conversão fora do escopo";
}

alert(
  `Distância em Anos-Luz: ${distanceInLY}\n${choserUnity}:${convertedDistance}`
);
