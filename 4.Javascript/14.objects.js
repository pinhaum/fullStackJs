let spaceship = {
  name: "fenix",
  crew: 7,
  type: "Batalha",
};

console.log(spaceship);
console.log(spaceship.type);

spaceship.isHitched = false;
spaceship["shieldLivel"] = 100;

console.log(spaceship);

////////////////////////////
let spaceStation = {
  name: "Receptora",
  platformsQuantity: 15,
  shape: "Esférica",
};

console.log(spaceStation.name.toUpperCase());

let spaceshipNames = ["Fenix", "Puller", "Golias"];

console.log(spaceshipNames[0].toUpperCase());

////////////////////////////
let spaceships = [
  { name: "Elemental", crewQuantity: 10 },
  { name: "Colossus", crewQuantity: 8 },
  { name: "Helmet", crewQuantity: 15 },
];

console.log(spaceships[0]);
console.log(spaceships[1].crewQuantity);

spaceships.forEach((spaceship) => {
  alert(`${spaceship.name} tem ${spaceship.crewQuantity} tripulantes`);
});

////////////////////////////
let dSpaceship = {
  name: "Deméter",
  type: "Extração",
  maxCrew: 20,
  turnOn: function () {
    alert("Preparando propulsão");
    alert("Ligando computador de bordo");
  },
};

dSpaceship.turnOn();

dSpaceship.velocity = 0;

dSpaceship.speedUp = function (acceleration) {
  this.velocity += acceleration;
};

console.log(dSpaceship);

dSpaceship.speedUp(10);

console.log(dSpaceship);
