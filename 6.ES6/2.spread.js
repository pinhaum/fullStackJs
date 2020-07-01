const spaceships = ["Colossus", "Artemis", "Fenix"];

console.log(spaceships); //imprime o array spaceships
console.log(...spaceships); // imprime cada elemento do array como uma string

let newSpaceships = [...spaceships, "Puller"];

console.log(newSpaceships);

///////////////////////////////
function speedUp(speed, acceleration) {
  return speed + acceleration;
}

let spaceshipAcceleration = [60, 10];

let newSpeed = speedUp(...spaceshipAcceleration);

console.log(newSpeed);
